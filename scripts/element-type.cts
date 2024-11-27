type generateElementsTypeStr = (
	typeValStr: string,
	typeImports: string[]
) => string
const generateElementsTypeStr: generateElementsTypeStr = (
	typeValStr,
	typeImports
) => {
	const typeImportsStr = typeImports.join("")
	return `${typeImportsStr}\ntype iconKey = ${typeValStr}\n\nexport type { iconKey }`
}

module.exports = {
	generate: generateElementsTypeStr
}
