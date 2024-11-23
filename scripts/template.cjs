const fillTemplate = (
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
	const format = (str) => `${preffix}${str}${suffix}`
	const repeat = (isFirst, isMiddle) =>
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

const getIconPair = (id, idx) => {
	const cleanId = id.replaceAll('"', "")
	if (!alreadyTranslated.has(cleanId)) newAlts.push(cleanId)
	missingIcons.delete(cleanId)
	const idEl = all.icons[idx]
	return `\n    [${id}, ${idEl}]`
}

const mapImp = `import { iconsMap } from "./types"\n\n`

const generateAllIconsMap = (allObj, allEntries) => {
	const elImp = `import ${allObj} from "../Elements"\n\n`
	const iconsMap = `const allIcons : iconsMap = new Map ( [\n${allEntries}\n])\n\n`
	const mapExp = `export { allIcons }`
	return [mapImp, elImp, iconsMap, mapExp].join("")
}

const generateTypeStr = (typeArrName, idStr, typeVal, typeName) =>
	`const ${typeArrName} = [\n    ${idStr}\n] as const\n\n${typeVal}\n\nexport type { ${typeName} }\nexport { ${typeArrName} }`

const usedIconsMap = (entriesStr) => {
	return `import { iconKey } from "../types"
import { removeUsed } from "./never"


const usedIcons: Map<string, Set<string>>  = new Map(${entriesStr})

type markAsUsed = (id: iconKey, local: string) => void
const markAsUsed: markAsUsed = (id, local) => {
	const prevUsed = usedIcons.get(local) || new Set()
	prevUsed.add(id)
	usedIcons.set(local, prevUsed)
	removeUsed(id)
}

const getAllUsed = () => {
	return Array.from(usedIcons.entries())
}

export { usedIcons, markAsUsed, getAllUsed }
`
}

module.exports = {
	fillTemplate,
	generateComment,
	generateAllIconsMap,
	generateTypeStr,
	usedIconsMap
}
