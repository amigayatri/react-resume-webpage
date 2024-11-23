const prettier = require("prettier")

const formatFile = async (contentStr, filePath) => {
	const formatted = await prettier.format(contentStr, {
		filepath: filePath,
		experimentalTernaries: true,
		tabWidth: 4,
		trailingComma: "none"
	})
	return formatted
}

module.exports = {
	formatFile
}
