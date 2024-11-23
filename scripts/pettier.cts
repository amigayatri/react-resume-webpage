const prettier = require("prettier")

type formatFile = (contentStr: string, filePath: string) => Promise<string>
const formatFile: formatFile = async (contentStr, filePath) => {
	const formatted = await prettier.format(contentStr, {
		filepath: filePath,
		experimentalTernaries: true,
		tabWidth: 4,
		semi: false,
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
