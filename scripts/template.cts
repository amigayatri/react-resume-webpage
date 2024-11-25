const files = require("./files.cts")
const utils = require("./utils.cts")

interface IconTemplate {
	preName: string
	preViewbox: string
	preTags: string
	afterTags: string
}

const subFromIndexOf = (
	str: string,
	start: string | number,
	end: string | number,
	includeStart: boolean = false,
	includeEnd: boolean = false
) => {
	let startIdx = typeof start === "number" ? start : str.indexOf(start)
	let endIdx = typeof end === "number" ? end : str.indexOf(end, startIdx)
	if (typeof start !== "number" && includeStart === true)
		startIdx += start.length
	if (typeof end !== "number" && includeEnd === true) endIdx += end.length
	return str.substring(startIdx, endIdx)
}

type createIconTemplate = () => IconTemplate
const createIconTemplate: createIconTemplate = () => {
	const iconFolderPath = "./src/icons/Elements/General"
	const [anyIcon] = files.getFolderContent(iconFolderPath, false)
	const iconPath = utils.concat(iconFolderPath, anyIcon)
	const newTemplate: Partial<IconTemplate> = {}
	const elStr = files.readFile(iconPath)
	const iconName = utils.createTitle(anyIcon.replace(".tsx", ""), "icon")
	const titleEndTag = "</title>"
	const postViewIdx = elStr.indexOf(">", elStr.indexOf("viewBox"))
	newTemplate.preName = subFromIndexOf(elStr, 0, iconName)
	newTemplate.preViewbox = subFromIndexOf(elStr, iconName, "viewBox", true)
	newTemplate.preTags = subFromIndexOf(
		elStr,
		postViewIdx,
		titleEndTag,
		false,
		true
	)
	newTemplate.afterTags = subFromIndexOf(elStr, "</Icon>", elStr.length)
	return newTemplate as IconTemplate
}

type fillTemplate = (
	iconName: string,
	viewbox: string,
	cleanTags: string,
	iconTemplate: IconTemplate
) => string
const fillTemplate: fillTemplate = (
	iconName,
	viewbox,
	cleanTags,
	{ preName, preViewbox, preTags, afterTags }
) =>
	`${preName}${iconName}${preViewbox}${viewbox}\n${preTags}\n${cleanTags}\n${afterTags}`

const generateComment = (content, isFolderName) => {
	const generateRepeat = (size, char) =>
		Array.from({ length: size }, () => char).join("")
	const commentContent =
		isFolderName === true ? `Icons from ${content}` : content
	const [preffix, suffix] = ["/*", "*/"]
	const tab = `    `
	const format = (str: string) => `${preffix}${str}${suffix}`
	const repeat = (isFirst?: boolean, isMiddle?: boolean) =>
		isFirst === true
			? format(generateRepeat(8 + commentContent.length, "*"))
			: isMiddle === true
				? format(generateRepeat(8 + commentContent.length, " "))
				: format(`${tab}${commentContent}${tab}`)
	const firstLine = repeat(true)
	const middleLine = repeat(false, true)
	const commentLine = repeat()
	return [firstLine, middleLine, commentLine, middleLine, firstLine, ""].join(
		"\n"
	)
}

const mapImp = `import { iconsMap } from "./types"\n\n`

type generateAllIconsMap = (allObj: string, allEntries: string) => string
const generateAllIconsMap: generateAllIconsMap = (allObj, allEntries) => {
	const elImp = `import ${allObj} from "../Elements"\n\n`
	const iconsMap = `const allIcons : iconsMap = new Map ( [\n${allEntries}\n])\n\n`
	const mapExp = `export { allIcons }`
	return [mapImp, elImp, iconsMap, mapExp].join("")
}

type generateTypeStr = (...args: string[]) => string
const generateTypeStr: generateTypeStr = (
	typeArrName,
	idStr,
	typeVal,
	typeName
) =>
	`const ${typeArrName} = [\n    ${idStr}\n] as const\n\n${typeVal}\n\nexport type { ${typeName} }\nexport { ${typeArrName} }`

type usedIconsMap = (
	fileContent: string,
	entriesStr: string,
	keys: [string, string]
) => string
const usedIconsMap: usedIconsMap = (fileContent, entriesStr, keys) => {
	const [startKey, endKey] = keys
	const preffixStr = fileContent.substring(0, fileContent.indexOf(startKey))
	const entriesConstStr = [
		"",
		startKey,
		`const entriesArr: [string, string[]][] = ${entriesStr}`,
		endKey,
		""
	].join("\n")
	const suffixStr = fileContent.substring(
		fileContent.indexOf(endKey) + endKey.length
	)
	return [preffixStr, entriesConstStr, suffixStr].join("\n")
}

module.exports = {
	createIconTemplate,
	fillTemplate,
	generateComment,
	generateAllIconsMap,
	generateTypeStr,
	usedIconsMap
}
