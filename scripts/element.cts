const utils = require(`./utils.cts`)
const fileFn = require(`./files.cts`)
const xml = require(`./xml.cts`)
const template = require(`./template.cts`)

const getViewbox = xml.getViewbox
const cleanSVG = xml.getCleanSVGContent
const { readFile, writeFile } = fileFn
const { getValIdx, sub, concat } = utils
const { fillTemplate } = template

type removeComments = (elStr: string, removeAll?: boolean) => string
const removeComments: removeComments = (elStr, removeAll) => {
	const elCpy = Array.from(elStr).join(``)
	const startIdx = getValIdx(elCpy, `\n//`, 0)
	if (startIdx === -1) return elStr
	const endIdx = getValIdx(elCpy, `\n`, startIdx + 1)
	const comment = sub(elCpy, startIdx, endIdx)
	let clean = elStr.replace(comment, ``)
	if (removeAll === true) {
		clean = removeComments(clean, removeAll)
	}
	return clean
}

type rewriteWithoutComment = (filePath: string) => void
const rewriteWithoutComment: rewriteWithoutComment = (filePath) => {
	if (!isIcon(filePath)) return
	const fileContent = readFile(filePath)
	const cleanContent = removeComments(fileContent, true)
	writeFile(filePath.replace("Icon", ""), cleanContent)
	fileFn.deleteFile(filePath)
}

type isIcon = (filename: string) => boolean
const isIcon: isIcon = (filename) => filename.indexOf(`.tsx`) >= 0

const convertedPath = concat("./new-svgs", "converted")

let iconTemplate = template.createIconTemplate()
type elFromSVG = (
	readPreffix: string,
	writePreffix: string,
	folderName: string,
	filename: string
) => void
const elFromSVG: elFromSVG = (
	readPreffix,
	writePreffix,
	folderName,
	filename
) => {
	if (folderName === "Toggle") return
	const withFolder = (preffix: string, nameToUse: string) =>
		concat(preffix, concat(folderName, nameToUse))
	const readPath = withFolder(readPreffix, filename)
	const svgContent = readFile(readPath)
	const elName = utils.createTitle(filename.replace(`.svg`, ``), `icon`)
	const viewbox = getViewbox(svgContent)
	const cleanTags = cleanSVG(svgContent)
	const elStr = fillTemplate(elName, viewbox, cleanTags, iconTemplate)
	if (cleanTags.length === 0) return
	const writePath = withFolder(writePreffix, elName.replace(`Icon`, `.tsx`))
	fileFn.createConditional(convertedPath)
	writeFile(writePath, elStr)
	fileFn.moveFile(readPath.replace(filename, ""), convertedPath, filename)
}

module.exports = {
	rewriteWithoutComment,
	removeComments,
	elFromSVG,
	isIcon
}
