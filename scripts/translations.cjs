const constants = require(`./constants.cjs`)
const fileFn = require("./files.cjs")
const template = require("./template.cjs")
const { readFile, writeFile } = fileFn

const getAlreadyTranslated = () => {
	const path = constants.translationPath
	const translationFile = readFile(path)
	const dataObj = JSON.parse(translationFile)
	const altEntries = Object.entries(dataObj.alt)
	const missingIcons = new Map(altEntries)
	const alreadyTranslated = new Set(Array.from(altEntries, ([key]) => key))
	return {
		already: alreadyTranslated,
		missing: missingIcons
	}
}

const idToIgnore = new Set(["index", "types.ts"])

const formatAltKey = (id, alt) =>
	!idToIgnore.has(id) ? `		"${id}" : "${alt}"` : ""

const joinObj = (objArr, withComma) => {
	if (withComma === true) return objArr.join(`,\n`)
	return objArr.join(`\n`)
}

const newAltsJSON = (newAltsArr) => {
	const defaultVal = `Ícone d`
	const format = (id) => formatAltKey(id, defaultVal)
	const valObjStr = joinObj(
		newAltsArr.map(format).filter((key) => key.length > 0),
		true
	)
	return joinObj(['	"new": {', valObjStr, "	}\n"])
}

const missingIconsJSON = (updatedMissing) => {
	const recover = (id) => updatedMissing.get(id)
	const format = (id) => formatAltKey(id, recover(id))
	const valObjStr = joinObj(Array.from(updatedMissing).map(format), true)
	return joinObj(['	"delete": {', valObjStr, "	}\n"])
}

const altFileText = (newAltsArr, updatedMissing) => {
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

const generateNewAltsFile = (newAltsArr, updatedMissing) => {
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
