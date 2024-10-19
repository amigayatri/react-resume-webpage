import palettesMap from "../../../constants/palettes"
import { SimpleColor, getInverse, getRGBFromHex } from "../../../lib/rgb"
import PaletteInfoProps from "../../../types/PaletteInfoProps"
import { Letter, Multicolor } from "./MulticoloredName.styled"

interface MulticoloredNameProps {
	info: PaletteInfoProps
	legible: boolean
	children: string | string[]
	isCustom?: boolean
	customColors?: string[]
}

const MulticoloredName = ({
	info,
	children,
	legible,
	isCustom,
	customColors
}: MulticoloredNameProps) => {
	const groupPalettes = palettesMap.get(info.group)
	if (groupPalettes === undefined) return
	const palette =
		isCustom !== true ? groupPalettes.get(info.name) : customColors
	if (palette === undefined) return
	const asArr: string[] = []
	if (typeof children === "string") {
		asArr.push(...children.split(""))
	} else {
		children.forEach((child) => asArr.push(...child.split("")))
	}
	const size = palette.length
	const colors = new Map()
	const handleInverse = (color: string) => {
		if (colors.has(color)) {
			const simple = colors.get(color)
			return simple
		} else {
			const simple: SimpleColor = {
				code: color,
				inverse: getInverse(getRGBFromHex(color))
			}
			const simpleInverse: SimpleColor = {
				code: simple.inverse,
				inverse: simple.code
			}
			colors.set(color, simple)
			colors.set(simple.inverse, simpleInverse)
			return simple
		}
	}

	const wrapperStyle = !legible
		? { marginLeft: "-4px", paddingLeft: "4px" }
		: { padding: "12px 0" }
	return (
		<Multicolor $isLegible={legible} style={wrapperStyle}>
			{asArr.map((char, idx) => {
				const { code, inverse } = handleInverse(palette[idx % size])
				const style = !legible
					? { backgroundColor: code, color: inverse }
					: { borderColor: code, borderWidth: "8px" }
				return (
					<Letter key={"char" + idx} style={style}>
						{char}
					</Letter>
				)
			})}
		</Multicolor>
	)
}

export default MulticoloredName
