type fillTemplate = (
	iconName: string,
	viewbox: string,
	cleanTags: string
) => string
const fillTemplate: fillTemplate = (
	iconName,
	viewbox,
	cleanTags
) => `import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const ${iconName} = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
		    <Icon
                $size={size}
                $hasTransition={hasTransition}
                role="img"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
                ${viewbox}
            >
                <title>{alt}</title>
                ${cleanTags}
            </Icon>
	    </IconWrapper>
	)
}
`

const generateComment = (content, isFolderName) => {
	const generateRepeat = (size, char) =>
		Array.from({ length: size }, () => char).join("")
	const commentContent =
		isFolderName === true ? `Icons from ${content}` : content
	const [preffix, suffix] = ["/*", "*/"]
	const tab = `    `
	const format = (str: string) => `${preffix}${str}${suffix}`
	const repeat = (isFirst?: boolean, isMiddle?: boolean) =>
		isFirst === true
			? format(generateRepeat(8 + commentContent.length, "*"))
			: isMiddle === true
				? format(generateRepeat(8 + commentContent.length, " "))
				: format(`${tab}${commentContent}${tab}`)
	const firstLine = repeat(true)
	const middleLine = repeat(false, true)
	const commentLine = repeat()
	return [firstLine, middleLine, commentLine, middleLine, firstLine, ""].join(
		"\n"
	)
}

const mapImp = `import { iconsMap } from "./types"\n\n`

type generateAllIconsMap = (allObj: string, allEntries: string) => string
const generateAllIconsMap: generateAllIconsMap = (allObj, allEntries) => {
	const elImp = `import ${allObj} from "../Elements"\n\n`
	const iconsMap = `const allIcons : iconsMap = new Map ( [\n${allEntries}\n])\n\n`
	const mapExp = `export { allIcons }`
	return [mapImp, elImp, iconsMap, mapExp].join("")
}

type generateTypeStr = (...args: string[]) => string
const generateTypeStr: generateTypeStr = (
	typeArrName,
	idStr,
	typeVal,
	typeName
) =>
	`const ${typeArrName} = [\n    ${idStr}\n] as const\n\n${typeVal}\n\nexport type { ${typeName} }\nexport { ${typeArrName} }`

type usedIconsMap = (
	fileContent: string,
	entriesStr: string,
	keys: [string, string]
) => string
const usedIconsMap: usedIconsMap = (fileContent, entriesStr, keys) => {
	const [startKey, endKey] = keys
	const preffixStr = fileContent.substring(0, fileContent.indexOf(startKey))
	const entriesConstStr = [
		"",
		startKey,
		`const entriesArr: [string, string[]][] = ${entriesStr}`,
		endKey,
		""
	].join("\n")
	const suffixStr = fileContent.substring(
		fileContent.indexOf(endKey) + endKey.length
	)
	return [preffixStr, entriesConstStr, suffixStr].join("\n")
}

module.exports = {
	fillTemplate,
	generateComment,
	generateAllIconsMap,
	generateTypeStr,
	usedIconsMap
}
