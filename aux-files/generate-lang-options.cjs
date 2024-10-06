const toRemove = ["update-options.cjs", "index.ts"]

const fs = require("fs")
const translatePath = "./src/languages"
const languageFiles = fs.readdirSync(translatePath)
const langsFilesSet = new Set(languageFiles)
for (const filename of toRemove) {
	langsFilesSet.delete(filename)
}
const langsNameSet = new Set()
const generateImport = (langFile) => {
	const name = langFile.replace(".json", "")
	const joined = name.split("-").join("")
	langsNameSet.add(name)
	return `import ${joined}Translation from "./${langFile}"`
}
const generateObj = (lang) => {
	const joined = lang.split("-").join("")
	return `    "${lang}": {\n        translation: ${joined}Translation\n    }`
}

const imports = []
const objKeys = []
langsFilesSet.forEach((lang) => imports.push(generateImport(lang)))
langsNameSet.forEach((lang) => objKeys.push(generateObj(lang)))

const text = [
	imports.join("\n"),
	"\nconst resources = {",
	objKeys.join(",\n"),
	"}\n",
	"export default resources"
].join("\n")

fs.writeFile("./src/languages/index.ts", text, (error) => {
	if (error) {
		console.error(error)
		return
	}
})
