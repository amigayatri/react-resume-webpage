const fs = require("fs")
const utils = require("./utils.cts")
const filter = utils.filterFolders
const prettier = require("./pettier.cts")
const { concat } = utils

type getFolderContent = (path: string, wantFolders?: boolean) => string[]
const getFolderContent: getFolderContent = (path, wantFolders) => {
	const fileList = fs.readdirSync(path)
	return filter(fileList, wantFolders)
}

type readFile = (path: string) => string
const readFile: readFile = (path) => {
	return fs.readFileSync(path, {
		encoding: "utf8"
	})
}

type deleteFile = (path: string, isToPrint?: boolean) => void
const deleteFile: deleteFile = (path, isToPrint = false) => {
	fs.unlink(path, (err: ErrorEvent) => {
		if (err) throw err
		isToPrint === true && console.log(`${path} was deleted`)
	})
}

type defaultWriteCb = (
	error: ErrorEvent,
	path: string,
	isToPrint?: boolean
) => void
const defaultWriteCb: defaultWriteCb = (error, path, isToPrint = false) => {
	if (error) {
		console.error(error)
		return
	}
	if (isToPrint) console.log(`${path} created`)
}

type writeFile = (
	path: string,
	contentStr: string,
	needPrettier?: boolean,
	isToPrint?: boolean,
	callbackFn?: defaultWriteCb | any
) => void
const writeFile: writeFile = async (
	path,
	contentStr,
	needPrettier = true,
	isToPrint = false,
	callbackFn
) => {
	const safeCb = callbackFn === undefined ? defaultWriteCb : callbackFn
	if (needPrettier === true) {
		prettier.formatFile(contentStr, path).then((safeContent: string) => {
			fs.writeFile(path, safeContent, (error: ErrorEvent) =>
				safeCb(error, path, isToPrint)
			)
		})
	} else {
		fs.writeFile(path, contentStr, safeCb)
	}
}

type mapFilesInside = (
	basePath: string,
	filesMapFn: (arg0: any) => any
) => any[]
const mapFilesInside: mapFilesInside = (basePath, filesMapFn) => {
	const files = getFolderContent(basePath, false)
	return files.map((filename) => filesMapFn(filename))
}

type mapFoldersInside = (
	basePath: string,
	forlderMapFn: (arg0: any) => any
) => any[]
const mapFoldersInside: mapFoldersInside = (basePath, folderMapFn) => {
	const foldersInside = getFolderContent(basePath, true)
	return foldersInside.map(folderMapFn)
}

type hasFolder = (path: string) => boolean
const hasFolder: hasFolder = (path) => {
	return fs.existsSync(path)
}

type createConditional = (path: string) => boolean
const createConditional: createConditional = (path) => {
	if (hasFolder(path)) {
		return true
	}
	fs.mkdirSync(path)
	return hasFolder(path)
}

type defaultMoveCb = (
	error: ErrorEvent,
	oldPath: string,
	newPath: string,
	isToPrint: boolean
) => void
const defaultMoveCb: defaultMoveCb = (error, oldPath, newPath, isToPrint) => {
	if (error) {
		console.error(error)
		return
	}
	if (isToPrint) console.log(`file moved from ${oldPath} to ${newPath}`)
}

type moveFile = (
	originPath: string,
	destPath: string,
	fileName: string,
	newName?: string,
	isToPrint?: boolean
) => void
const moveFile: moveFile = (
	originPath,
	destPath,
	fileName,
	newName,
	isToPrint = true
) => {
	const origin = concat(originPath, fileName)
	const dest = concat(destPath, newName !== undefined ? newName : fileName)
	fs.rename(origin, dest, (error: ErrorEvent) =>
		defaultMoveCb(error, origin, dest, isToPrint === true)
	)
}

type rename = (path: string, oldName: string, newName: string) => void
const rename: rename = (path, oldName, newName) => {
	moveFile(path, path, oldName, newName)
}

module.exports = {
	getFolderContent,
	readFile,
	deleteFile,
	mapFoldersInside,
	mapFilesInside,
	createConditional,
	hasFolder,
	rename,
	moveFile,
	writeFile
}
