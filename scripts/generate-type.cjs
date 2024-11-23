const template = require("./template.cjs")

const generateImport = (folderName, type) =>
	`import { ${type} } from "./Elements/${folderName}/types.ts"\n`

const idFromFilename = (filename) =>
	`"${filename.replace(".tsx", "").replaceAll('"', "").toLowerCase()}"`

const generateIds = (files) => files.map(idFromFilename)

const generateType = (typeArrName, typeName) =>
	`type ${typeName} = (typeof ${typeArrName})[number]`

const generate = (folderName, idArr) => {
	const idStr = idArr.join(",\n    ")
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
