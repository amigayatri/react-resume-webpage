const constants = require("./constants.cts")
const utils = require("./utils.cts")
const fileFn = require("./files.cts")
const el = require("./generate-element.cts")

const { writeFile } = fileFn
const { concat } = utils

const filesToExclude: Set<string> = new Set(["types.ts", "index.tsx", ""])

type generateImports = (filename: string) => string
const generateImports: generateImports = (filename) =>
	!filesToExclude.has(filename)
		? `import { ${filename.replace(
				".tsx",
				""
			)}Icon } from "./${filename.replace("Icon.tsx", "")}"`
		: ``

type generateObject = (files: string[]) => string
const generateObject: generateObject = (files) =>
	`{\n    ${files
		.map((filename) =>
			filesToExclude.has(filename) ? "" : filename.replace(".tsx", "")
		)
		.filter((filename) => filename.length > 0)
		.join("Icon,\n    ")}Icon\n}`

type generateIndex = (folderName: string, files: string[]) => string
const generateIndex = (folderName, files) => {
	const fileObj = generateObject(files)
	const imports = files.map(generateImports).join("\n")
	const indexStr = el.generateIndex(imports, fileObj)
	const iconPaths = concat(constants.iconElementsPath, "Elements")
	writeFile(`${iconPaths}/${folderName}/index.tsx`, indexStr)
	return fileObj
}

module.exports = {
	generateIndex,
	generateObject
}
