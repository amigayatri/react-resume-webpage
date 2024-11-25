const fileFn = require("./files.cts")
const utils = require("./utils.cts")
const { concat } = utils
const constants = require("./constants.cts")

interface Change {
	from: string
	to: string
}

const changeElement = (elStr: string, changes: Change[]) => {
	let newStr = Array.from(elStr).join("")
	for (const change of changes) {
		newStr = newStr.replace(change.from, change.to)
	}
	return newStr
}

const dontChangeSet: Set<string> = new Set(["Toggle", "index.tsx"])
const bulkChangeIcons = () => {
	console.log("Changing icons")
	const basePath = concat(constants.iconElementsPath, "Elements")
	const changes: Change[] = []
	if (changes.length === 0) {
		console.log("No changes to do\n")
		return
	}
	fileFn.mapFoldersInside(basePath, (folderName) => {
		if (dontChangeSet.has(folderName)) return
		const folderPath = concat(basePath, folderName)
		fileFn.mapFilesInside(folderPath, (fileName) => {
			if (fileName.indexOf(".tsx") === -1 || dontChangeSet.has(fileName))
				return
			const filePath = concat(folderPath, fileName)
			const elStr = fileFn.readFile(filePath)
			const newElStr = changeElement(elStr, changes)
			fileFn.writeFile(filePath, newElStr)
		})
	})
}

module.exports = {
	run: bulkChangeIcons
}
export default module.exports
