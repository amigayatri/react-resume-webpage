import { useTheme } from "styled-components"
import palettesMap from "../../../constants/palettes"
import { SimpleColor, getInverse, getRGBFromHex } from "../../../lib/rgb"
import PaletteInfoProps from "../../../types/PaletteInfoProps"
import { Letter, Multicolor } from "./MulticoloredName.styled"
import SVGIcon from "../../../icons/SVGIcon"
import { CSSProperties } from "react"

interface MulticoloredNameProps {
	info: PaletteInfoProps
	legible: boolean
	children: string | string[]
	isCustom?: boolean
	customColors?: string[]
	iconId?: string
	fontSize: number
}

const MulticoloredName = ({
	info,
	children,
	legible,
	isCustom,
	customColors,
	iconId,
	fontSize
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
	const theme = useTheme()
	const wrapperStyle = !legible
		? { marginLeft: "-4px", paddingLeft: "4px" }
		: {
				padding: " 0",
				color: customColors !== undefined ? customColors[0] : theme.primary
		  }
	const hasIcon = iconId !== undefined
	const start = hasIcon ? 1 : 0
	const handleStyle = (idx: number) => {
		if (idx === -1 && start === 0) return {}
		const { code, inverse } = handleInverse(palette[(idx + start) % size])
		const style = !legible
			? {
					backgroundColor: code,
					color: inverse,
					height: fontSize * 1.6,
					minWidth: fontSize
			  }
			: {
					borderColor: code,
					borderWidth: "8px",
					minWidth: Math.ceil(fontSize * 0.75),
					height: fontSize * 1.6 + 16
			  }
		return style as CSSProperties
	}
	const iconStyle = handleStyle(-1)
	return (
		<Multicolor $isLegible={legible} style={wrapperStyle}>
			{hasIcon && (
				<Letter
					className={legible ? "legible icon" : "not-legible icon"}
					style={iconStyle}
				>
					<SVGIcon
						color={legible ? palette[0] : "currentColor"}
						size={fontSize}
						id={iconId}
						local="multicoloredname"
					/>
				</Letter>
			)}
			{asArr.map((char, idx) => {
				return (
					<Letter
						className={legible ? "legible" : "not-legible"}
						key={"char" + idx}
						style={handleStyle(idx)}
					>
						{idx !== 0 ? char : char.toLocaleUpperCase()}
					</Letter>
				)
			})}
		</Multicolor>
	)
}

export default MulticoloredName
