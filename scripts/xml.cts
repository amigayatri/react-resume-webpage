const notEqual: Map<string, string> = new Map([[`{`, `}`]])
const utils = require(`./utils.cts`)
const { camelize, sub, getValIdx } = utils

const tagsToRemove = [`svg`, `defs`]
const attrsToRemove = new Set([`style`, `class`])
const colorValsMap: Map<string, string> = new Map([
	[`currentColor`, `currentColor`],
	["none", "none"]
])

type createAttStr = (
	attrName: string,
	attrVal: string | undefined,
	needCamelize?: boolean
) => string
const createAttStr: createAttStr = (attrName, attrVal, needCamelize) =>
	attrVal !== undefined
		? needCamelize === true
			? `${camelize(attrName)}=${attrVal}`
			: `${attrName}=${attrVal}`
		: ``

const anyLetterRegex = new RegExp(/\w+/)

const hasLetter = (str: string) => {
	return anyLetterRegex.test(str)
}

const renderableElementsSet: Set<string> = new Set([
	"a",
	"circle",
	"ellipse",
	"foreignObject",
	"g",
	"image",
	"line",
	"path",
	"polygon",
	"polyline",
	"rect",
	"switch",
	"symbol",
	"text",
	"textPath",
	"tspan",
	"use"
])
const colorAttrs: Set<string> = new Set(["fill", "stroke"])

const cleanTag = (tagStr: string) => {
	const [tagName] = tagStr.split(` `)
	if (!hasLetter(tagName) || !renderableElementsSet.has(tagName)) return ``
	let prevAttrName: string | undefined = undefined
	const cleanAttrArr: string[] = []
	const pushAttr = (attrName, attrVal) =>
		attrName.length > 0 &&
		cleanAttrArr.push(createAttStr(attrName, attrVal, true))
	const attrArr = tagStr.split(`=`)
	for (let i = 0; i < attrArr.length; i++) {
		const subStr = attrArr[i]
		if (subStr === "\n") continue
		const splitVal = subStr.split(` `)
		if (prevAttrName !== undefined && !attrsToRemove.has(prevAttrName)) {
			const prevAttrVal = getAttrVal(
				createAttStr(prevAttrName, subStr, true),
				prevAttrName
			)
			if (typeof prevAttrVal === "string" && prevAttrVal.length >= 0) {
				if (!colorAttrs.has(prevAttrName)) {
					pushAttr(prevAttrName, prevAttrVal)
				} else if (colorValsMap.has(prevAttrVal)) {
					pushAttr(prevAttrName, colorValsMap.get(prevAttrVal))
				}
			}
		}
		prevAttrName = splitVal.at(-1)
	}
	return `${open}${tagName} ${cleanAttrArr.join(` `)}/${close}`.replaceAll(
		`\n`,
		``
	)
}

const getCleanSVGContent = (elStr: string) => {
	let prevCpy = Array.from(elStr).join(``)
	for (const tag of tagsToRemove) {
		prevCpy = removeTag(prevCpy, tag, true)
	}
	const cleanTagArr = prevCpy.split(`<`).map(cleanTag)
	const cleanSVGString = cleanTagArr
		.filter((tag) => tag.length > 0 && hasLetter(tag) === true)
		.join(`\n`)
	if (hasLetter(cleanSVGString)) return cleanSVGString
	return ""
}

type getAttrVal = (elStr: string, attrName: string) => undefined | true | string
const getAttrVal: getAttrVal = (elStr, attrName) => {
	const attrPos = elStr.indexOf(attrName)
	if (attrPos < 0) return undefined
	const equalPos = elStr.indexOf(`=`, attrPos)
	if (equalPos === -1) return true
	const startIdx = equalPos + 1
	const delim = elStr[startIdx]
	if (notEqual.has(delim)) {
		const endIdx = elStr.indexOf(notEqual.get(delim) || "$", startIdx)
		return sub(elStr, startIdx, endIdx)
	} else {
		const endIdx = elStr.indexOf(delim, startIdx + 1)
		return sub(elStr, startIdx, endIdx)
	}
}

type removeAttr = (elStr: string, attrName: string) => string
const removeAttr: removeAttr = (elStr, attrName) => {
	const val = getAttrVal(elStr, attrName)
	if (typeof val !== "string") return ``
	const attrStr = createAttStr(attrName, val)
	return elStr.replace(attrStr, ``)
}

const getViewbox = (elStr: string) => {
	const attrName = `viewBox`
	const attrVal = getAttrVal(elStr, attrName)
	if (typeof attrVal !== "string") return ""
	return createAttStr(attrName, attrVal)
}

const [open, close] = [`<`, `>`]

type createTag = (tagName: string) => [string, string]
const createTag: createTag = (tagName) => [
	`${open}${tagName}`,
	`${open}/${tagName}${close}`
]

type getTag = (elStr: string, tagName: string) => string[] | string
const getTag: getTag = (elStr, tagName) => {
	const [start, end] = createTag(tagName)
	const startIdx = getValIdx(elStr, start, 0)
	if (startIdx < 0) return elStr
	const closeIdx = getValIdx(elStr, close, startIdx)
	const startTag = sub(elStr, startIdx, closeIdx)
	const endIdx = getValIdx(elStr, end, startIdx)
	if (endIdx === -1) return [startTag]
	return [startTag, end]
}

type removeTag = (elStr: string, tagName: string, removeAll?: boolean) => any
const removeTag: removeTag = (elStr, tagName, removeAll = false) => {
	let elCpy = Array.from(elStr).join(``)
	const [start] = createTag(tagName)
	const startIdx = getValIdx(elStr, start, 0)
	if (startIdx < 0) return elStr
	const [startTag, endTag] = getTag(elCpy, tagName)
	elCpy = elCpy.replace(endTag, ``)
	elCpy = elCpy.replace(startTag, ``)
	if (removeAll === true && startIdx >= 0) {
		elCpy = removeTag(elCpy, tagName, removeAll)
	}
	return elCpy
}

module.exports = {
	getAttrVal,
	removeTag,
	getCleanSVGContent,
	removeAttr,
	getTag,
	getViewbox
}
