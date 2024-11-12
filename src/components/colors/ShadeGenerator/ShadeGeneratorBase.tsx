import { ShadeGeneratorWrapper } from "./ShadeGenerator.styled.ts"
import { useState, useEffect } from "react"
import BaseElement from "../../../types/common/BaseElementProps.ts"
import { Hero } from "../Hero/"
import { AddColor } from "../AddColor/"
import { TargetList } from "../TargetList/"
import { ColorList } from "../ColorList/"
import { ShadeList } from "../ShadeList/"
import { palettesMap } from "../../../constants/palettes"
import { Color, getTargets } from "../../../lib/colors"

export const ShadeGeneratorBase = ({ lng, t }: BaseElement) => {
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
	const addPalette = (group: string, palette: string) => {
		const groupPalettes = availablePalettes.get(group)
		if (groupPalettes === undefined) return
		const themeArr = groupPalettes.get(palette)
		if (themeArr === undefined) return
		for (const color of themeArr.colors) {
			addColor(color)
		}
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
