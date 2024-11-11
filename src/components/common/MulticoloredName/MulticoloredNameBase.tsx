import { Letter, Multicolor } from "./MulticoloredName.styled"
import { MulticoloredNameProps } from "."
import { palettesMap } from "./../../../constants/palettes"
import { SVGIcon } from "../SVGIcon/client"
import { CSSProperties, useTheme } from "styled-components"
import { SimpleColor, getInverse, getRGBFromHex } from "../../../lib/rgb"

export const MulticoloredNameBase = ({
	lng,
	info,
	children,
	legible,
	legibleTextColors,
	isCustom,
	customColors,
	iconId,
	fontSize,
	local
}: MulticoloredNameProps) => {
	const groupPalettes = palettesMap.get(info.group)
	if (groupPalettes === undefined) return
	const palette = groupPalettes.get(info.name)
	if (!isCustom && palette === undefined) return
	const paletteColors = !isCustom ? palette?.colors : customColors
	if (paletteColors === undefined) return
	const asArr: string[] = []
	if (typeof children === "string") {
		asArr.push(...children.split(""))
	} else {
		children.forEach((child) => asArr.push(...child.split("")))
	}
	const size = paletteColors.length
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
		const { code, inverse } = handleInverse(paletteColors[(idx + start) % size])
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
					height: fontSize * 1.6 + 16,
					color: legibleTextColors === true ? code : "unset"
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
						lng={lng}
						color={legible ? paletteColors[0] : "currentColor"}
						size={fontSize}
						id={iconId}
						local={local}
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
