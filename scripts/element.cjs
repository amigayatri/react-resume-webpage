const utils = require(`./utils.cjs`)
const fileFn = require(`./files.cjs`)
const xml = require(`./xml.cjs`)
const template = require(`./template.cjs`)

const getViewbox = xml.getViewbox
const cleanSVG = xml.getCleanSVGContent
const { readFile, writeFile } = fileFn
const { getValIdx, sub, concat } = utils
const { fillTemplate } = template

const removeComments = (elStr, removeAll) => {
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

const rewriteWithoutComment = (filePath) => {
	if (!isIcon(filePath)) return
	const fileContent = readFile(filePath)
	const cleanContent = removeComments(fileContent, true)
	console.log(cleanContent.length)
	writeFile(filePath.replace("Icon", ""), cleanContent)
	fileFn.deleteFile(filePath)
}

const isIcon = (filename) => filename.indexOf(`.tsx`) >= 0

const elFromSVG = (readPreffix, writePreffix, folderName, filename) => {
	const withFolder = (preffix, nameToUse) =>
		concat(preffix, concat(folderName, nameToUse))
	const svgContent = readFile(withFolder(readPreffix, filename))
	const elName = utils.createTitle(filename.replace(`.svg`, ``), `icon`)
	const viewbox = getViewbox(svgContent)
	const cleanTags = cleanSVG(svgContent).replaceAll(
		`                <
 />`,
		``
	)
	const elStr = fillTemplate(elName, viewbox, cleanTags)
	const writePath = withFolder(writePreffix, elName.replace(`Icon`, `.tsx`))
	writeFile(writePath, elStr)
}

module.exports = {
	rewriteWithoutComment,
	removeComments,
	elFromSVG,
	isIcon
}
