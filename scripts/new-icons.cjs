const constants = require("./constants.cjs")
const elsFn = require("./element.cjs")
const utils = require("./utils.cjs")
const fileFn = require("./files.cjs")

const mapFolders = fileFn.mapFoldersInside
const mapFiles = fileFn.mapFilesInside
const { concat } = utils

const createNewIcons = () => {
	const readPath = constants.toAddPath
	const writePath = concat(constants.iconElementsPath, "Elements")
	const elFromSVG = elsFn.elFromSVG
	const createDir = fileFn.createConditional
	mapFolders(readPath, (folderName) => {
		const readFolderPath = concat(readPath, folderName)
		const createFolderPath = concat(writePath, folderName)
		createDir(createFolderPath)
		return mapFiles(readFolderPath, (fileName) =>
			elFromSVG(readPath, writePath, folderName, fileName)
		)
	})
}

module.exports = {
	run: createNewIcons
}
