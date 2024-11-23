type cleanFolderIndex = (rawIndexStr: string) => string
const cleanFolderIndex: cleanFolderIndex = (indexStr) =>
	indexStr
		.replaceAll('Icon"', '"')
		.replaceAll(
			`,
    Icon`,
			``
		)
		.replaceAll(
			`

import `,
			`
import `.replaceAll(`    Icon,`, ``)
		)

type generateImports = (folderName: string, importObj: string) => string
const generateImports: generateImports = (folderName, importObj) => {
	return cleanFolderIndex(
		`import  ${importObj} from "./${folderName.replace("Icon", "")}"\n`
	)
}

type generateIndex = (imports: string, fileObj: string) => string
const generateIndex: generateIndex = (imports, fileObj) =>
	cleanFolderIndex(`${imports}\n\nexport ${fileObj}\n`)

module.exports = {
	generateImports,
	generateIndex
}
