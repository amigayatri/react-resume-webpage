const constants = require("./constants.cts")
const utils = require("./utils.cts")
const fileFn = require("./files.cts")
const template = require("./template.cts")
const translation = require("./translations.cts")
const el = require("./generate-element.cts")
const elType = require("./element-type.cts")
const typeFn = require("./generate-type.cts")
const folder = require("./folder.cts")

const { writeFile, getFolderContent } = fileFn
const mapFolders = fileFn.mapFoldersInside
const { concat } = utils

interface FileImports {
	icons: string
	type: string
	typeArrName: string
}
type importsMap = Map<string, FileImports>
const mapImportsByFolder: importsMap = new Map()

const newAlts: string[] = []
interface AllInfo {
	icons: string[]
	types: string[]
	ids: string[]
}
const all: AllInfo = {
	icons: [],
	types: [],
	ids: []
}

type writeElements = (mapImportsByFolder: importsMap) => void
const writeElements: writeElements = (mapImportsByFolder) => {
	const imports: string[] = []
	const typeImports: string[] = []
	const elementsPath = concat(constants.iconElementsPath, "Elements")
	mapFolders(elementsPath, (folder) => {
		if (folder.indexOf(".") > -1) return
		const mapped = mapImportsByFolder.get(folder)
		if (mapped === undefined) return
		const { icons, type } = mapped
		const importStr =
			template.generateComment(folder, true) +
			el.generateImports(folder, icons)

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

type mapIcons = () => void
type generateType = (folderName: string, files: string[]) => [string, string]
type mapIconsFromFolder = (folderName: string) => void
type getIconPair = (id: string, idx: number) => string
const mapIcons: mapIcons = () => {
	const translationMaps = translation.getAlreadyTranslated()
	const { already, missing } = translationMaps
	const elementsPath = concat(constants.iconElementsPath, "Elements")

	const generateType: generateType = (folderName, files) => {
		const idArr = typeFn.generateIds(files)
		all.ids.push(...idArr)
		const [typeName, typeArrName, typeStr] = typeFn.generate(
			folderName,
			idArr
		)
		const iconPaths = concat(constants.iconElementsPath, "Elements")
		writeFile(`${iconPaths}/${folderName}/types.ts`, typeStr)
		return [typeName, typeArrName]
	}

	const mapIconsFromFolder: mapIconsFromFolder = (folderName) => {
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
			typeArrName: typeArrName
		})
	}

	mapFolders(elementsPath, (folder) => {
		mapIconsFromFolder(folder)
	})
	writeElements(mapImportsByFolder)
	const idToIgnore = new Set([
		"types.ts",
		"index",
		'"index"',
		'"types.ts"',
		""
	])
	const allObj = mapImportsByFolder.get("all")
	const getIconPair: getIconPair = (id, idx) => {
		const cleanId = id.replaceAll('"', "")
		if (!already.has(cleanId) && !idToIgnore.has(id)) newAlts.push(cleanId)
		missing.delete(cleanId)
		if (idToIgnore.has(id)) return ""
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
export default module.exports
