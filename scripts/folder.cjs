const constants = require("./constants.cjs")
const utils = require("./utils.cjs")
const fileFn = require("./files.cjs")
const el = require("./generate-element.cjs")

const { writeFile } = fileFn
const { concat } = utils

const filesToExclude = new Set(["types.ts", "index.tsx", ""])

const generateImports = (filename) =>
	!filesToExclude.has(filename)
		? `import { ${filename.replace(
				".tsx",
				""
			)}Icon } from "./${filename.replace("Icon.tsx", "")}"`
		: ``

const generateObject = (files) =>
	`{\n    ${files
		.map((filename) =>
			filesToExclude.has(filename) ? "" : filename.replace(".tsx", "")
		)
		.filter((filename) => filename.length > 0)
		.join("Icon,\n    ")}Icon\n}`

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
