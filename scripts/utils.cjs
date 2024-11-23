const camelize = (str) => {
	return str.replace(/-./g, (x) => x[1].toUpperCase())
}

const capitalize = (str) => {
	const [firstChar] = str
	const sub = str.substring(1)
	return `${firstChar.toUpperCase()}${sub}`
}

const createTitle = (str, suffix) => {
	const asTitle = capitalize(camelize(str))
	if (suffix === undefined) return asTitle
	return `${asTitle}${capitalize(suffix)}`
}

const isFolder = (pathname) => {
	return pathname.indexOf(`.`) < 0
}

const isBoolean = (varName) => varName === true || varName === false

const filterFolders = (files, wantFolders) => {
	if (!isBoolean(wantFolders))
		return files.filter((val) => isFolder(val) === true)
	return files.filter((val) => isFolder(val) === wantFolders)
}

const concat = (preffix, suffix, customDelim) =>
	customDelim === undefined
		? `${preffix}/${suffix}`
		: `${preffix}${customDelim}${suffix}`

const sub = (str, startIdx, endIdx) => str.substring(startIdx, endIdx + 1)

const getValIdx = (str, val, startIdx, isToPrint) => {
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
