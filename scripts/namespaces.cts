const constants = require(`./constants.cts`)
const fileFn = require("./files.cts")
const utils = require("./utils.cts")

const { concat } = utils

const emptyObj = (obj) => {
	const newObj = {}
	for (const [key, val] of Object.entries(obj)) {
		if (typeof val === "string") {
			newObj[key] = ""
		} else if (typeof val === "object") {
			newObj[key] = emptyObj(val)
		}
	}
	return newObj
}

const createModelFromNamespace = (fileStr) => {
	const fileObj = JSON.parse(fileStr)
	const emptyModel = emptyObj(fileObj)
	return emptyModel
}

const path = constants.translationPath
const localesPath = path.replace("/pt-BR", "")

const updateNamespaces = () => {
	console.log("Update translation namespaces if needed")
	const namespacesMap: Map<string, string> = new Map()
	fileFn.mapFilesInside(path, (namespace) => {
		const filePath = concat(path, namespace)
		const namespaceFile = fileFn.readFile(filePath)
		const model = createModelFromNamespace(namespaceFile)
		namespacesMap.set(namespace, JSON.stringify(model))
	})
	fileFn.mapFoldersInside(localesPath, (langName) => {
		if (langName === "pt-BR") return
		const langPath = concat(localesPath, langName)
		const langNamespaces = new Set(fileFn.getFolderContent(langPath, false))
		for (const [namespace, model] of namespacesMap.entries()) {
			if (!langNamespaces.has(namespace)) {
				const namespacePath = concat(langPath, namespace)
				fileFn.writeFile(namespacePath, model, true, true)
			}
		}
	})
	updateKeyOnAllLocales()
}

interface KeyToUpdate {
	namespace: string
	keys: {
		from: string
		to: string
	}[]
}

const updateKeyOnAllLocales = () => {
	const toChange: KeyToUpdate[] = []
	fileFn.mapFoldersInside(localesPath, (langName) => {
		for (const { namespace, keys } of toChange) {
			const filePath = concat(
				localesPath,
				concat(langName, namespace.concat(".json"))
			)
			const fileContent = fileFn.readFile(filePath)
			let fileCopy = Array.from(fileContent).join("")
			for (const { from, to } of keys) {
				fileCopy = fileCopy.replaceAll(from, to)
			}
			fileFn.writeFile(filePath, fileCopy)
		}
	})
}

module.exports = {
	run: updateNamespaces
}
export default module.exports
