const constants = require("./constants.cts")
const elsFn = require("./element.cts")
const utils = require("./utils.cts")
const fileFn = require("./files.cts")

const mapFolders = fileFn.mapFoldersInside
const mapFiles = fileFn.mapFilesInside
const { concat } = utils

const foldersToIgore: Set<string> = new Set(["converted"])
const createNewIcons = () => {
	const readPath = constants.toAddPath
	const writePath = concat(constants.iconElementsPath, "Elements")
	const elFromSVG = elsFn.elFromSVG
	const createDir = fileFn.createConditional
	mapFolders(readPath, (folderName: string) => {
		if (foldersToIgore.has(folderName)) return
		const readFolderPath = concat(readPath, folderName)
		const createFolderPath = concat(writePath, folderName)
		createDir(createFolderPath)
		return mapFiles(readFolderPath, (fileName: string) =>
			elFromSVG(readPath, writePath, folderName, fileName)
		)
	})
}

module.exports = {
	run: createNewIcons
}
export default module.exports
