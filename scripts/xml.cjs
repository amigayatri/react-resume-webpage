const notEqual = new Map([[`{`, `}`]])
const utils = require(`./utils.cjs`)
const { camelize, sub, getValIdx } = utils

const tagsToRemove = [`svg`, `defs`]
const attrsToRemove = new Set([`style`, `class`])
const fillValsMap = new Map([
	[`currentColor`, `currentColor`],
	[`#000`, `none`]
])

const createAttStr = (attrName, attrVal, needCamelize) =>
	attrVal !== undefined
		? needCamelize === true
			? `${camelize(attrName)}=${attrVal}`
			: `${attrName}=${attrVal}`
		: ``

const anyLetterRegex = new RegExp(/\w+/)

const hasLetter = (str) => {
	return anyLetterRegex.test(str)
}

const cleanTag = (tagStr) => {
	const [tagName] = tagStr.split(` `)
	if (!hasLetter(tagName)) return ``
	let prevAttrName = undefined
	const cleanAttrArr = []
	const pushAttr = (attrName, attrVal) =>
		cleanAttrArr.push(createAttStr(attrName, attrVal, true))
	const attrArr = tagStr.split(`=`)
	for (let i = 0; i < attrArr.length; i++) {
		const subStr = attrArr[i]
		if (subStr === "\n") continue
		const splitVal = subStr.split(` `)
		if (prevAttrName !== undefined && !attrsToRemove.has(prevAttrName)) {
			const prevAttrVal = getAttrVal(
				createAttStr(prevAttrName, subStr),
				prevAttrName
			)
			if (prevAttrVal.length >= 0) {
				if (prevAttrName !== "fill") {
					pushAttr(prevAttrName, prevAttrVal)
				} else if (fillValsMap.has(prevAttrVal)) {
					pushAttr(prevAttrName, fillValsMap.get(prevAttrVal))
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

const getCleanSVGContent = (elStr) => {
	let prevCpy = Array.from(elStr).join(``)
	for (const tag of tagsToRemove) {
		prevCpy = removeTag(prevCpy, tag, true)
	}
	const cleanTagArr = prevCpy.split(`<`).map(cleanTag)
	return cleanTagArr.filter((attrStr) => hasLetter(attrStr) === true).join(`\n`)
}

const getAttrVal = (elStr, attrName) => {
	const attrPos = elStr.indexOf(attrName)
	if (attrPos < 0) return undefined
	const equalPos = elStr.indexOf(`=`, attrPos)
	if (equalPos === -1) return true
	const startIdx = equalPos + 1
	const delim = elStr[startIdx]
	if (notEqual.has(delim)) {
		const endIdx = elStr.indexOf(notEqual.get(delim), startIdx)
		return sub(elStr, startIdx, endIdx)
	} else {
		const endIdx = elStr.indexOf(delim, startIdx + 1)
		return sub(elStr, startIdx, endIdx)
	}
}

const removeAttr = (elStr, attrName) => {
	const val = getAttrVal(elStr, attrName)
	const attrStr = createAttStr(attrName, val)
	return elStr.replace(attrStr, ``)
}

const getViewbox = (elStr) => {
	const attrName = `viewBox`
	const attrVal = getAttrVal(elStr, attrName)
	return createAttStr(attrName, attrVal)
}

const [open, close] = [`<`, `>`]

const createTag = (tagName) => [
	`${open}${tagName}`,
	`${open}/${tagName}${close}`
]

const getTag = (elStr, tagName) => {
	const [start, end] = createTag(tagName)
	const startIdx = getValIdx(elStr, start, 0)
	if (startIdx < 0) return elStr
	const closeIdx = getValIdx(elStr, close, startIdx)
	const startTag = sub(elStr, startIdx, closeIdx)
	const endIdx = getValIdx(elStr, end, startIdx)
	if (endIdx === -1) return [startTag]
	return [startTag, end]
}

const removeTag = (elStr, tagName, removeAll) => {
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
