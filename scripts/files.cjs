const fs = require("fs")
const utils = require("./utils.cjs")
const filter = utils.filterFolders
const prettier = require("./pettier.cjs")

const getFolderContent = (path, wantFolders) => {
	const fileList = fs.readdirSync(path)
	return filter(fileList, wantFolders)
}

const readFile = (path) => {
	return fs.readFileSync(path, {
		encoding: "utf8"
	})
}

const deleteFile = (path, isToPrint = false) => {
	return fs.unlink(path, (err) => {
		if (err) throw err
		isToPrint === true && console.log(`${path} was deleted`)
	})
}

const defaultWriteCb = (error, path, isToPrint = false) => {
	if (error) {
		console.error(error)
		return
	}
	if (isToPrint) console.log(`${path} created`)
}

const writeFile = async (
	path,
	contentStr,
	needPrettier = true,
	isToPrint = false,
	callbackFn
) => {
	const safeCb = callbackFn === undefined ? defaultWriteCb : callbackFn
	if (needPrettier === true) {
		return prettier.formatFile(contentStr, path).then((safeContent) => {
			return fs.writeFile(path, safeContent, (error) =>
				safeCb(error, path, isToPrint)
			)
		})
	} else {
		return fs.writeFile(path, contentStr, safeCb)
	}
}

const mapFilesInside = (basePath, filesMapFn) => {
	const files = getFolderContent(basePath, false)
	return files.map((filename) => filesMapFn(filename))
}

const mapFoldersInside = (basePath, folderMapFn) => {
	const foldersInside = getFolderContent(basePath, true)
	return foldersInside.map(folderMapFn)
}

const hasFolder = (path) => {
	return fs.existsSync(path)
}

const createConditional = (path) => {
	if (hasFolder(path)) {
		return true
	}
	fs.mkdirSync(path)
	return hasFolder(path)
}

module.exports = {
	getFolderContent,
	readFile,
	deleteFile,
	mapFoldersInside,
	mapFilesInside,
	createConditional,
	writeFile
}
