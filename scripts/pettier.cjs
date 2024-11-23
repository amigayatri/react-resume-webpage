const prettier = require("prettier")

const formatFile = async (contentStr, filePath) => {
	const formatted = await prettier.format(contentStr, {
		filepath: filePath,
		experimentalTernaries: true,
		tabWidth: 4,
		trailingComma: "none",
		arrowParens: "always",
		bracketSpacing: true,
		proseWrap: "preserve",
		quoteProps: "as-needed"
	})
	return formatted
}

module.exports = {
	formatFile
}
