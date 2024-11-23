const constants = require("./constants.cjs")
const utils = require("./utils.cjs")
const fileFn = require("./files.cjs")
const template = require("./template.cjs")
const translation = require("./translations.cjs")
const el = require("./generate-element.cjs")
const elType = require("./element-type.cjs")
const typeFn = require("./generate-type.cjs")
const folder = require("./folder.cjs")

const { writeFile, getFolderContent } = fileFn
const mapFolders = fileFn.mapFoldersInside
const { concat } = utils

const mapImportsByFolder = new Map()

const newAlts = []
const all = {
	icons: [],
	types: [],
	ids: []
}

const writeElements = (mapImportsByFolder) => {
	const imports = []
	const typeImports = []
	const elementsPath = concat(constants.iconElementsPath, "Elements")
	mapFolders(elementsPath, (folder) => {
		if (folder.indexOf(".") > -1) return
		const mapped = mapImportsByFolder.get(folder)
		if (mapped === undefined) return
		const { icons, type } = mapped
		const importStr =
			template.generateComment(folder, true) + el.generateImports(folder, icons)

		imports.push(importStr)
		typeImports.push(typeFn.generateImport(folder, type))
	})
	const allObj = folder.generateObject(all.icons)
	mapImportsByFolder.set("all", allObj)
	const indexStr = el.generateIndex(imports.join("\n"), allObj)
	const typeValStr = all.types.map((typeKey) => `\n    | ${typeKey}`).join("")
	const typeStr = elType.generate(typeValStr, typeImports)
	writeFile(`${elementsPath}/index.tsx`, indexStr)
	writeFile(`${constants.iconElementsPath}/types.ts`, typeStr)
}

const mapIcons = () => {
	const translationMaps = translation.getAlreadyTranslated()
	const { already, missing } = translationMaps
	const elementsPath = concat(constants.iconElementsPath, "Elements")

	const generateType = (folderName, files) => {
		const idArr = typeFn.generateIds(files)
		all.ids.push(...idArr)
		const [typeName, typeArrName, typeStr] = typeFn.generate(folderName, idArr)
		const iconPaths = concat(constants.iconElementsPath, "Elements")
		writeFile(`${iconPaths}/${folderName}/types.ts`, typeStr)
		return [typeName, typeArrName]
	}

	const mapIconsFromFolder = (folderName) => {
		const filteredIcons = getFolderContent(
			concat(elementsPath, folderName),
			false
		)
		all.icons.push(...filteredIcons)
		const fileObj = folder.generateIndex(folderName, filteredIcons)
		const [typeName, typeArrName] = generateType(folderName, filteredIcons)
		all.types.push(typeName)
		mapImportsByFolder.set(folderName, {
			icons: fileObj,
			type: typeName,
			typeArr: typeArrName
		})
	}

	mapFolders(elementsPath, (folder) => {
		mapIconsFromFolder(folder)
	})
	writeElements(mapImportsByFolder)

	const allObj = mapImportsByFolder.get("all")
	const getIconPair = (id, idx) => {
		const cleanId = id.replaceAll('"', "")
		if (!already.has(cleanId)) newAlts.push(cleanId)
		missing.delete(cleanId)
		if (id === '"index"' || id === '"types.ts"') return ""
		const idEl = all.icons[idx].replace(".tsx", "Icon")
		return `\n    [${id}, ${idEl}]`
	}
	const entriesArr = all.ids.map(getIconPair)
	const allEntries = entriesArr.filter((pair) => pair.length > 0).join(",")
	const allStr = template.generateAllIconsMap(allObj, allEntries)
	writeFile(`${constants.iconElementsPath}/maps/all.ts`, allStr)
	translation.generateNewAltsFile(newAlts, missing)
}

module.exports = {
	run: mapIcons
}
