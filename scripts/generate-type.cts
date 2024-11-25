const template = require("./template.cts")

type generateImport = (folderName: string, typeName: string) => string
const generateImport: generateImport = (folderName, type) =>
	`import { ${type} } from "./Elements/${folderName}/types.ts"\n`

type idFromFilename = (filename: string) => string
const idFromFilename: idFromFilename = (filename) =>
	`"${filename.replace(".tsx", "").replaceAll('"', "").toLowerCase()}"`

const idToIgnore: Set<string> = new Set(["types.ts", "index"])
type generateIds = (files: string[]) => string[]
const generateIds: generateIds = (files) =>
	files
		.map(idFromFilename)
		.filter((id) => !idToIgnore.has(id.replaceAll('"', "")))

type generateType = (typeArrName: string, typeName: string) => string
const generateType: generateType = (typeArrName, typeName) =>
	`type ${typeName} = (typeof ${typeArrName})[number]`

type generate = (
	folderName: string,
	idArr: string[]
) => [string, string, string]
const generate: generate = (folderName, idArr) => {
	const idStr = idArr
		.filter((id) => !idToIgnore.has(id.replaceAll('"', "")))
		.join(",\n    ")
	const typeArrName = new String(folderName).toLowerCase().concat("Arr")
	const typeName = typeArrName.replace("Arr", "Key")
	const typeVal = generateType(typeArrName, typeName)
	const typeStr = template.generateTypeStr(
		typeArrName,
		idStr,
		typeVal,
		typeName
	)
	return [typeName, typeArrName, typeStr]
}

module.exports = {
	generateImport,
	generateIds,
	generate
}
