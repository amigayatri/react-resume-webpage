import { ShadeGeneratorWrapper } from "./ShadeGenerator.styled.ts"
import { useState, useEffect } from "react"
import { Hero, AddColor, TargetList, ColorList, ShadeList } from "../"
import { palettesMap } from "../../../../../constants/palettes"
import { Color, getTargets, addTarget } from "../../../../../lib/colors/"
import { ShadeGeneratorBaseProps } from "../types"

type getPaletteColors = (group: string, palette: string) => string[]
export const ShadeGeneratorBase = ({ lng, t }: ShadeGeneratorBaseProps) => {
	const [colors, setColors] = useState(new Map<string, Color>())
	const [updatedList, setUpdatedList] = useState(true)
	const [targets, setTargets] = useState(getTargets())
	const [availablePalettes, setAvailablePalettes] = useState(new Map())

	useEffect(() => {
		setAvailablePalettes(palettesMap)
	}, [])

	const addColor = (code: string) => {
		code = code.toUpperCase()
		if (colors.has(code)) return
		const colorsSet = colors
		colorsSet.set(code, new Color(code))
		setColors(colorsSet)
		setUpdatedList(false)
	}

	const getPaletteColors: getPaletteColors = (group, palette) => {
		const groupPalettes = availablePalettes.get(group)
		if (groupPalettes === undefined) return
		const themeArr = groupPalettes.get(palette)
		if (themeArr === undefined) {
			const empty: string[] = []
			return empty
		} else {
			return themeArr.colors
		}
	}
	const addPalette = (group: string, palette: string) => {
		for (const color of getPaletteColors(group, palette)) {
			addColor(color)
		}
	}

	const addPaletteAsTarget = (group: string, palette: string) => {
		if (!updatedList) setUpdatedList(true)
		for (const color of getPaletteColors(group, palette)) {
			addTarget(color)
		}
		setTargets(getTargets())
	}

	const removeColor = (code: string) => {
		const colorsSet = colors
		colorsSet.delete(code)
		setColors(colorsSet)
		setUpdatedList(false)
	}
	const regenerateTargets = () => {
		if (!updatedList) setUpdatedList(true)
		const newTargets = getTargets()
		setTargets(newTargets)
	}
	const regenerateColors = () => {
		for (const color of colors.values()) {
			color.regenerateVariations()
		}
		regenerateTargets()
	}
	const generateCodeList = () => {
		if (!updatedList) setUpdatedList(true)
		if (colors.size == 0) return []
		const res = []
		for (const color of colors.values()) {
			res.push({
				color: { code: color.code, inverse: color.palette.inverse },
				remove: (code: string) => removeColor(code)
			})
		}
		return res
	}
	const generateColorList = () => {
		if (!updatedList) setUpdatedList(true)
		if (colors.size === 0) return []
		return Array.from(colors.values())
	}
	return (
		<ShadeGeneratorWrapper>
			<Hero lng={lng} t={t} />
			<AddColor regenerate={regenerateColors} add={addColor} lng={lng} t={t} />
			<TargetList
				addPalette={addPaletteAsTarget}
				targets={targets}
				regenerate={regenerateTargets}
				updatedList={updatedList}
				lng={lng}
				t={t}
			/>
			<ColorList
				addPalette={addPalette}
				colors={colors}
				updatedList={updatedList}
				regenerate={generateCodeList}
				lng={lng}
				t={t}
			/>
			<ShadeList
				updatedList={updatedList}
				regenerate={generateColorList}
				lng={lng}
				t={t}
			/>
		</ShadeGeneratorWrapper>
	)
}
