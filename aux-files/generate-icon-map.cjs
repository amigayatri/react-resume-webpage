const toExclude = ["Styles.ts", "SVGIcon.tsx", "TemplateName.tsx"]

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

const generateArrayItem = (filename) => {
	const id = filename.replace("Icon", "").toLowerCase()
	return `    ["${id}", ${filename}]`
}
const arrItems = filtered.map(generateArrayItem)

const txt = [
	imports.join("\n"),
	"\nconst icons = new Map([",
	arrItems.join(",\n"),
	"])\n",
	"export default icons"
].join("\n")

fs.writeFile("./src/constants/icons-map.ts", txt, (error) => {
	if (error) {
		console.error(error)
		return
	}
})
