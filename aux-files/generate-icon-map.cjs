const toExclude = [
	"Common.styled.ts",
	"index.ts",
	"index.tsx",
	"types.ts",
	"template"
]

const fs = require("fs")
const elementsPath = "./src/icons"
const iconPaths = `${elementsPath}/Elements`
const folderNameList = fs.readdirSync(iconPaths)
const toRemove = new Set(toExclude)
const filteredFolders = []
for (const folderName of folderNameList) {
	if (!toRemove.has(folderName)) filteredFolders.push(folderName)
}
filteredFolders.sort()
const iconToRemove = new Set(["index.tsx", "types.ts"])
const generateImports = (filename) => {
	return `import { ${filename} } from "./${filename}"`
}
const generateObject = (files) => {
	return `{\n    ${files.join(",\n    ")}\n}`
}
const mapImportsByFolder = new Map()

const generateIndexStr = (imports, fileObj) =>
	`${imports}\n\nexport ${fileObj}\n`
const all = {
	icons: [],
	types: [],
	ids: []
}

const generateIndex = (folderName, files) => {
	const fileObj = generateObject(files)
	const imports = files.map(generateImports).join("\n")
	const indexStr = generateIndexStr(imports, fileObj)
	fs.writeFile(`${iconPaths}/${folderName}/index.tsx`, indexStr, (error) => {
		if (error) {
			console.error(error)
			return
		}
	})
	return fileObj
}

const generateIds = (filename) =>
	`"${filename.replace("Icon", "").toLowerCase()}"`
const generateType = (typeArrName, typeName) =>
	`type ${typeName} = (typeof ${typeArrName})[number]`

const generateTypeStr = (typeArrName, idStr, typeVal, typeName) =>
	`const ${typeArrName} = [\n    ${idStr}\n] as const\n\n${typeVal}\n\nexport type { ${typeName} }\nexport { ${typeArrName} }`

const generateTypeFile = (folderName, files) => {
	const idArr = files.map(generateIds)
	all.ids.push(...idArr)
	const typeArrName = new String(folderName).toLowerCase().concat("Arr")
	const typeName = typeArrName.replace("Arr", "Key")
	const typeVal = generateType(typeArrName, typeName)
	const idStr = idArr.join(",\n    ")
	const typeStr = generateTypeStr(typeArrName, idStr, typeVal, typeName)
	fs.writeFile(`${iconPaths}/${folderName}/types.ts`, typeStr, (error) => {
		if (error) {
			console.error(error)
			return
		}
	})
	return [typeName, typeArrName]
}

const mapIconsFromFolder = (folderName) => {
	const filteredIcons = []
	const rawIcons = fs.readdirSync(`${iconPaths}/${folderName}`)
	for (const filename of rawIcons) {
		const clean = filename.replace(".tsx", "")
		if (!iconToRemove.has(filename)) filteredIcons.push(clean)
	}
	all.icons.push(...filteredIcons)
	const fileObj = generateIndex(folderName, filteredIcons)
	const [typeName, typeArrName] = generateTypeFile(folderName, filteredIcons)
	all.types.push(typeName)
	mapImportsByFolder.set(folderName, {
		icons: fileObj,
		type: typeName,
		typeArr: typeArrName
	})
}

const generateElementImports = (folderName, importObj) => {
	return `import  ${importObj} from "./${folderName}"\n`
}

const generateElementsTypeStr = (typeImports) => {
	const typeValStr = all.types.map((typeKey) => `\n    | ${typeKey}`).join("")
	const typeImportsStr = typeImports.join("")
	return `${typeImportsStr}\ntype toggleIconKey = toggleKey\n\ntype iconKey = ${typeValStr}\n\nexport type { iconKey, toggleIconKey }`
}

const generateFolderComment = (folderName) =>
	`/*\n*\n*\n*\n*    Icons from ${folderName} folder\n*\n*\n*\n*/\n\n`

const generateTypeImport = (folderName, type) =>
	`import { ${type} } from "./Elements/${folderName}/types.ts"\n`

const writeElements = () => {
	const imports = []
	const typeImports = []
	for (const folder of filteredFolders) {
		const mapped = mapImportsByFolder.get(folder)
		if (mapped === undefined) continue
		const { icons, type } = mapped
		const importStr =
			generateFolderComment(folder) + generateElementImports(folder, icons)
		imports.push(importStr)
		typeImports.push(generateTypeImport(folder, type))
	}
	const allObj = generateObject(all.icons)
	mapImportsByFolder.set("all", allObj)
	const indexStr = generateIndexStr(imports.join("\n"), allObj)
	const typeStr = generateElementsTypeStr(typeImports)
	fs.writeFile(`${iconPaths}/index.tsx`, indexStr, (error) => {
		if (error) {
			console.error(error)
			return
		}
	})
	fs.writeFile(`${elementsPath}/types.ts`, typeStr, (error) => {
		if (error) {
			console.error(error)
			return
		}
	})
}
filteredFolders.map(mapIconsFromFolder)
writeElements()

const alreadyTranslated = new Set()
const missingIcons = new Map()
const getAlreadyTranslated = () => {
	const translationFile = fs.readFileSync(
		"./src/i18n/locales/pt-BR/icons.json",
		{
			encoding: "utf8"
		}
	)
	const dataObj = JSON.parse(translationFile)
	for (const [key, alt] of Object.entries(dataObj.alt)) {
		alreadyTranslated.add(key)
		missingIcons.set(key, alt)
	}
}

getAlreadyTranslated()

const newAlts = []

const getIconPair = (id, idx) => {
	const cleanId = id.replaceAll('"', "")
	if (!alreadyTranslated.has(cleanId)) newAlts.push(cleanId)
	missingIcons.delete(cleanId)
	const idEl = all.icons[idx]
	return `\n    [${id}, ${idEl}]`
}

const mapAndTranslations = () => {
	const mapImp = `import { iconsMap } from "./types"\n\n`
	const allObj = mapImportsByFolder.get("all")
	const elImp = `import ${allObj} from "../Elements"\n\n`
	const objArr = all.ids.map(getIconPair)
	const objArrStr = objArr.join(",")
	const iconsMap = `const allIcons : iconsMap = new Map ( [\n${objArrStr}\n])\n\n`
	const mapExp = `export { allIcons }`
	const allStr = [mapImp, elImp, iconsMap, mapExp].join("")
	fs.writeFile(`${elementsPath}/maps/all.ts`, allStr, (error) => {
		if (error) {
			console.error(error)
			return
		}
	})
}
mapAndTranslations()

const generateAltKey = (id) => {
	return `		"${id}" : "Ícone de "`
}

const recoverAltKey = ([id, alt]) => {
	return `		"${id}" : "${alt}"`
}

const updateKeys = newAlts.length > 0 || missingIcons.size > 0
const altTexts = updateKeys
	? [
			"{",
			'	"new": {',
			newAlts.map(generateAltKey).join(",\n"),
			"	},\n",
			'	"delete": {',
			Array.from(missingIcons.entries()).map(recoverAltKey).join(",\n"),
			"	}",
			"}"
	  ].join("\n")
	: '"Nothing to change! =)"'

!updateKeys && console.log(altTexts.replaceAll('"', ""))

fs.writeFile("./new_alts.json", `{\n"translation": ${altTexts}\n}`, (error) => {
	if (error) {
		console.error(error)
		return
	}
})
