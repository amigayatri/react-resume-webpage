type camelize = (str: string) => string
const camelize: camelize = (str) =>
	str.replace(/-./g, (x) => x[1].toUpperCase())

type capitalize = (str: string) => string
const capitalize: capitalize = (str) => {
	const [firstChar] = str
	const sub = str.substring(1)
	return `${firstChar.toUpperCase()}${sub}`
}

type createTitle = (str: string, suffix?: string) => string
const createTitle: createTitle = (str, suffix) => {
	const asTitle = capitalize(camelize(str))
	if (suffix === undefined) return asTitle
	return `${asTitle}${capitalize(suffix)}`
}

type isFolder = (pathname: string) => boolean
const isFolder: isFolder = (pathname) => {
	return pathname.indexOf(`.`) < 0
}

type isBoolean = (varName: any) => varName is boolean
const isBoolean: isBoolean = (varName) => typeof varName === "boolean"

type filterFolders = (files: string[], wantFolders?: boolean) => string[]
const filterFolders: filterFolders = (files, wantFolders) => {
	if (!isBoolean(wantFolders))
		return files.filter((val) => isFolder(val) === true)
	return files.filter((val) => isFolder(val) === wantFolders)
}

type concat = (preffix: string, suffix: string, customDelim?: string) => string
const concat: concat = (preffix, suffix, customDelim) =>
	customDelim === undefined
		? `${preffix}/${suffix}`
		: `${preffix}${customDelim}${suffix}`

type sub = (str: string, startIdx: number, endIdx: number) => string
const sub: sub = (str, startIdx, endIdx) =>
	startIdx <= endIdx ? str.substring(startIdx, endIdx + 1) : ""

type getValIdx = (
	str: string,
	val: string,
	startIdx: number,
	isToPrint?: boolean
) => any
const getValIdx: getValIdx = (str, val, startIdx, isToPrint = false) => {
	const valIdx = str.indexOf(val, startIdx)
	isToPrint === true && console.log(val, valIdx)
	return valIdx
}

module.exports = {
	camelize,
	capitalize,
	createTitle,
	filterFolders,
	concat,
	sub,
	getValIdx
}
