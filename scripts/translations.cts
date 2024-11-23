const constants = require(`./constants.cts`)
const fileFn = require("./files.cts")
const template = require("./template.cts")
const { readFile, writeFile } = fileFn

type getAlreadyTranslated = () => {
	already: Set<string>
	missing: Map<string, string>
}
const getAlreadyTranslated: getAlreadyTranslated = () => {
	const path = constants.translationPath
	const translationFile = readFile(path)
	const dataObj = JSON.parse(translationFile)
	const altEntries: [string, string][] = Array.from(
		Object.entries(dataObj.alt),
		([key, val]) => [key, val as string]
	)
	const missingIcons: Map<string, string> = new Map(altEntries)
	const alreadyTranslated = new Set(Array.from(altEntries, ([key]) => key))
	return {
		already: alreadyTranslated,
		missing: missingIcons
	}
}

const idToIgnore: Set<string> = new Set(["index", "types.ts"])

type formatAltKey = (id: string, alt: string) => string
const formatAltKey: formatAltKey = (id, alt) =>
	!idToIgnore.has(id) ? `		"${id}" : "${alt}"` : ""

type joinObj = (objArr: string[], withComma?: boolean) => string
const joinObj: joinObj = (objArr, withComma) => {
	if (withComma === true) return objArr.join(`,\n`)
	return objArr.join(`\n`)
}

type newAltsJSON = (newAltsArr: string[]) => string
const newAltsJSON: newAltsJSON = (newAltsArr) => {
	const defaultVal = `Ícone d`
	const format = (id) => formatAltKey(id, defaultVal)
	const valObjStr = joinObj(
		newAltsArr.map(format).filter((key) => key.length > 0),
		true
	)
	return joinObj(['	"new": {', valObjStr, "	}\n"])
}

type missingIconsJSON = (updatedMissing: Map<string, string>) => string
const missingIconsJSON: missingIconsJSON = (updatedMissing) => {
	const recover = (id: string) => updatedMissing.get(id) || ""
	const format = (id: string) => formatAltKey(id, recover(id))
	const valObjStr = joinObj(
		Array.from(updatedMissing.keys()).map(format),
		true
	)
	return joinObj(['	"delete": {', valObjStr, "	}\n"])
}

type altFileText = (
	newAltsArr: string[],
	updatedMissing: Map<string, string>
) => string
const altFileText: altFileText = (newAltsArr, updatedMissing) => {
	const newObj = newAltsJSON(newAltsArr)
	const missingObj = missingIconsJSON(updatedMissing)
	return joinObj([
		"{",
		'"alts" : {',
		joinObj([newObj, missingObj], true),
		"}",
		"}"
	])
}

const noChangeStr = "    Nothing to change! =)    "

const generateComment = template.generateComment

type generateNewAltsFile = (
	newAltsArr: string[],
	updatedMissing: Map<string, string>
) => void
const generateNewAltsFile: generateNewAltsFile = (
	newAltsArr,
	updatedMissing
) => {
	const altPath = "./new_alts.json"
	const needUpdate = newAltsArr.length > 0 || updatedMissing.size > 0
	const altTexts = !needUpdate
		? `{\n"alt": "${noChangeStr}"\n}`
		: altFileText(newAltsArr, updatedMissing)
	const exist = fileFn.hasFolder
	if (!needUpdate) {
		exist(altPath) ? fileFn.deleteFile(altPath) : ""
		console.log(generateComment(noChangeStr).replaceAll("/", ""))
		return
	}
	writeFile(altPath, altTexts)
}

module.exports = {
	getAlreadyTranslated,
	generateNewAltsFile
}
