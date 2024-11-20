const fs = require("fs")
const toAddPath = "./new-icons"
const newPath = "./new-elements"
const newSVGs = fs.readdirSync(toAddPath)

const fillTemplate = (
	iconName,
	viewboxVal,
	paths
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
                ${viewboxVal}
            >
                <title>{alt}</title>
                ${paths}
            </Icon>
	    </IconWrapper>
	)
}
`

const cleanPath = (pathStr) =>
	pathStr
		.replaceAll('fill="#000000"', "")
		.replaceAll(`fill="#000"`, 'fill="none"')
		.replaceAll('fill="#fff"', "")
		.replaceAll('class=""', "")
		.replaceAll('style=""', "")
		.replaceAll("fill-opacity", "fillOpacity")

const createElement = (filename) => {
	const svgContent = fs.readFileSync(`${toAddPath}/${filename}`, {
		encoding: "utf8"
	})
	const viewBoxPos = svgContent.indexOf("viewBox")
	let quoteCount = 0
	const viewBoxArr = []
	for (let i = viewBoxPos; i < svgContent.length; i++) {
		const char = svgContent[i]
		viewBoxArr.push(char)
		if (char === '"') {
			quoteCount++
			if (quoteCount === 2) break
		}
	}
	const viewBoxVal = viewBoxArr.join("")
	const formattedName = []
	const elementNameArr = filename.replace(".svg", "").split("-")
	for (const wordName of elementNameArr) {
		const [firstChar] = wordName
		formattedName.push(firstChar.toUpperCase() + wordName.substring(1))
	}
	formattedName.push("Icon")
	const elName = formattedName.join("")
	let startPathsIdx = svgContent.indexOf("<g")
	if (startPathsIdx < 0) startPathsIdx = svgContent.indexOf("<path")
	const pathStr = svgContent.substring(startPathsIdx).replace("</svg>", "")
	const cleanPathStr = cleanPath(pathStr)
	const indexStr = fillTemplate(elName, viewBoxVal, cleanPathStr)
	fs.writeFile(`${newPath}/${elName}.tsx`, indexStr, (error) => {
		if (error) {
			console.error(error)
			return
		}
	})
}
newSVGs.map(createElement)
