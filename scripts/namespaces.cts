const constants = require(`./constants.cts`)
const fileFn = require("./files.cts")
const utils = require("./utils.cts")

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

const updateNamespaces = () => {
	console.log("Update translation namespaces if needed")
	const path = constants.translationPath
	const namespacesMap: Map<string, string> = new Map()
	fileFn.mapFilesInside(path, (namespace) => {
		const filePath = utils.concat(path, namespace)
		const namespaceFile = fileFn.readFile(filePath)
		const model = createModelFromNamespace(namespaceFile)
		namespacesMap.set(namespace, JSON.stringify(model))
	})
	const localesPath = path.replace("/pt-BR", "")
	fileFn.mapFoldersInside(localesPath, (langName) => {
		if (langName === "pt-BR") return
		const langPath = utils.concat(localesPath, langName)
		const langNamespaces = new Set(fileFn.getFolderContent(langPath, false))
		for (const [namespace, model] of namespacesMap.entries()) {
			if (!langNamespaces.has(namespace)) {
				const namespacePath = utils.concat(langPath, namespace)
				fileFn.writeFile(namespacePath, model, true, true)
			}
		}
	})
}

module.exports = {
	run: updateNamespaces
}
export default module.exports
