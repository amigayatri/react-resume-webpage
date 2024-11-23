type generateElementsTypeStr = (
	typeValStr: string,
	typeImports: string[]
) => string
const generateElementsTypeStr: generateElementsTypeStr = (
	typeValStr,
	typeImports
) => {
	const typeImportsStr = typeImports.join("")
	return `${typeImportsStr}\ntype toggleIconKey = toggleKey\n\ntype iconKey = ${typeValStr}\n\nexport type { iconKey, toggleIconKey }`
}

module.exports = {
	generate: generateElementsTypeStr
}
