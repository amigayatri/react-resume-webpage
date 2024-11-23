const cleanFolderIndex = (indexStr) =>
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

const generateImports = (folderName, importObj) => {
	return cleanFolderIndex(
		`import  ${importObj} from "./${folderName.replace("Icon", "")}"\n`
	)
}

const generateIndex = (imports, fileObj) =>
	cleanFolderIndex(`${imports}\n\nexport ${fileObj}\n`)

module.exports = {
	generateImports,
	generateIndex
}
