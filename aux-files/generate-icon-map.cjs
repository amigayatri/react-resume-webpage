const toExclude = ["Styles.ts", "SVGIcon.tsx", "TemplateNameIcon.tsx"]

const fs = require("fs")
const iconPaths = "./src/icons"
const iconNameList = fs.readdirSync(iconPaths)

const toRemove = new Set(toExclude)
const filtered = []
for (const filename of iconNameList) {
	const clean = filename.replace(".tsx", "")
	if (!toRemove.has(filename)) filtered.push(clean)
}
filtered.sort()
const generateImports = (filename) => {
	return `import ${filename} from "../icons/${filename}"`
}
const imports = filtered.map(generateImports)

const alreadyTranslated = new Set()

const translationFile = fs.readFileSync("./src/languages/pt-BR.json", {
	encoding: "utf8"
})
const dataObj = JSON.parse(translationFile)
for (const key of Object.keys(dataObj.icons.alt)) {
	alreadyTranslated.add(key)
}
const alts = []

const generateArrayItem = (filename) => {
	const id = filename.replace("Icon", "").toLowerCase()
	if (!alreadyTranslated.has(id)) alts.push(id)
	return `    ["${id}", ${filename}]`
}
const arrItems = filtered.map(generateArrayItem)

const txt = [
	imports.join("\n"),
	"\nconst icons = new Map([",
	arrItems.join(",\n"),
	"])\n",
	"export const numberOfIcons = icons.size\n",
	"export default icons"
].join("\n")

const generateAltKey = (id) => {
	return `		"${id}" : "Ícone de "`
}

const altTexts = [
	"{",
	'	"alts": {',
	alts.map(generateAltKey).join(",\n"),
	"	}",
	"}"
].join("\n")
fs.writeFile("./new_alts.json", altTexts, (error) => {
	if (error) {
		console.error(error)
		return
	}
})

fs.writeFile("./src/constants/icons-map.ts", txt, (error) => {
	if (error) {
		console.error(error)
		return
	}
})
