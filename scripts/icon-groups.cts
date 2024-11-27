const constants = require("./constants.cts")
const utils = require("./utils.cts")
const fileFn = require("./files.cts")

const { writeFile, readFile } = fileFn
const { concat } = utils

interface AllSetsMap {
	imports: string[]
	entries: string[]
}

const allSetsMap: AllSetsMap = {
	imports: [`import { groupsSetsMap, groupsSetsEntries } from "./types"`],
	entries: []
}

const groupsFolderPath = concat(
	concat(constants.iconElementsPath, "maps"),
	"groups"
)

const allGroups = ["all"]

type generateParcialSet = (folderName: string, ids: string[]) => void
const generateParcialSet: generateParcialSet = (folderName, ids) => {
	const lowercase = Array.from(folderName).join("").toLowerCase()
	allGroups.push(lowercase)
	const fileName = lowercase.concat(".ts")
	const setPath = concat(groupsFolderPath, fileName)
	const setName = lowercase.concat("IconsSet")
	const fileContent = `import { groupIconsSet } from "./types"\nexport const ${setName} : groupIconsSet = new Set([${ids.join(",")}])`
	allSetsMap.imports.push(`import { ${setName} } from "./${lowercase}"`)
	allSetsMap.entries.push(`["${lowercase}", ${setName}]`)
	writeFile(setPath, fileContent)
}

const declarations = [
	"export const groupsSets: groupsSetsMap = new Map(entries)",
	"export const availableGroups: string[] = Array.from(groupsSets.keys())"
]

const entriesName = "const entries: groupsSetsEntries = ["

type generateGroupsMap = () => void
type join = (arr: string[]) => string

const generateGroupsMap: generateGroupsMap = () => {
	const join: join = (arr) => arr.join("\n")
	const importsStr = join(allSetsMap.imports)
	const entriesStr = join([entriesName, allSetsMap.entries.join(",\n"), "]"])
	const fileContent = join([importsStr, entriesStr, ...declarations])
	writeFile(concat(groupsFolderPath, "index.ts"), fileContent)
	updateTranslations()
}

const updateTranslations = () => {
	const translationPath = concat(constants.translationPath, "iconlist.json")
	const fileContent = readFile(translationPath)
	const asObj = JSON.parse(fileContent)
	if (asObj.options === undefined) {
		asObj.options = {}
	}
	const presentGroups = new Set(Object.keys(asObj.options))
	for (const group of allGroups) {
		if (!presentGroups.has(group)) {
			asObj.options[group] = ""
		}
	}
	writeFile(translationPath, JSON.stringify(asObj))
}

module.exports = {
	generateParcial: generateParcialSet,
	generate: generateGroupsMap
}
