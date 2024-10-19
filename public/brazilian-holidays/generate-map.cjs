const fs = require("fs")
const jsonNames = fs.readdirSync("./")
const toRemove = new Set(["generate-map.cjs", "index.ts"])
const imports = []
const generateImport = (filename) => {
	if (toRemove.has(filename)) return
	const sigla = filename.replace(".json", "")
	imports.push(`import ${sigla} from "./${filename}"`)
}
const pairs = []
const generatePair = (filename) => {
	if (toRemove.has(filename)) return
	const sigla = filename.replace(".json", "")
	pairs.push(`   ["${sigla}", ${sigla}]`)
}
jsonNames.forEach(generateImport)
jsonNames.forEach(generatePair)
const file = [
	imports.join("\n"),
	"\nconst statesList = new Map([",
	pairs.join(",\n"),
	"])\n",
	"export default statesList"
].join("\n")
fs.writeFile("./index.ts", file, (error) => {
	if (error) {
		console.error(error)
		return
	}
})
