import { ShadeGeneratorWrapper } from "./ShadeGenerator.styled.ts"
import { useState, useEffect } from "react"
import { AddColor, TargetList, ColorList, ShadeList } from "../"
import { getPalette } from "../../../../../lib/palettes/"
import { createColor, Controller } from "../../../../../lib/colors/"
import { ShadeGeneratorBaseProps, colorsMap } from "../types"
import { useTheme } from "styled-components"

type getPaletteColors = (group: string, palette: string) => string[]
export const ShadeGeneratorBase = ({ lng, t }: ShadeGeneratorBaseProps) => {
	const startMap: colorsMap = new Map()
	const [colors, setColors] = useState(startMap)
	const [updatedList, setUpdatedList] = useState(true)
	const [controller, setController] = useState(new Controller())
	const [targets, setTargets] = useState(controller.targets.get())

	useEffect(() => {
		const newController = new Controller()
		setController(newController)
		newController.targets.add("#FF0000")
		newController.targets.add("#00FF00")
		newController.targets.add("#0000FF")
		setTargets(newController.targets.get())
	}, [])

	const addColor = (code: string) => {
		code = code.toUpperCase()
		if (colors.has(code)) return
		const colorsSet = colors
		const newColor = createColor(code)
		if (!newColor) return
		colorsSet.set(code, newColor)
		setColors(colorsSet)
		setUpdatedList(false)
	}

	const getPaletteColors: getPaletteColors = (group, palette) => {
		const empty: string[] = []
		const selectedPalette = getPalette(group, palette)
		if (selectedPalette === undefined) return empty
		return selectedPalette.colors
	}
	const addPalette = (group: string, palette: string) => {
		for (const color of getPaletteColors(group, palette)) {
			addColor(color)
		}
	}

	const addPaletteAsTarget = (group: string, palette: string) => {
		if (!updatedList) setUpdatedList(true)
		for (const color of getPaletteColors(group, palette)) {
			controller.targets.add(color)
		}
		setTargets(controller.targets.get())
	}

	const removeColor = (code: string) => {
		const colorsSet = colors
		colorsSet.delete(code)
		setColors(colorsSet)
		setUpdatedList(false)
	}
	const regenerateTargets = () => {
		if (!updatedList) setUpdatedList(true)
		const newTargets = controller.targets.get()
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
	const theme = useTheme()
	const titleColors = [theme.red, theme.pink, theme.purple, theme.blue]

	return (
		<ShadeGeneratorWrapper>
			<AddColor
				controller={controller}
				regenerate={regenerateColors}
				add={addColor}
				lng={lng}
				t={t}
				titleColor={titleColors[0]}
				colors={titleColors}
			/>
			<TargetList
				controller={controller}
				addPalette={addPaletteAsTarget}
				targets={targets}
				regenerate={regenerateTargets}
				updatedList={updatedList}
				lng={lng}
				t={t}
				titleColor={titleColors[1]}
			/>
			<ColorList
				addPalette={addPalette}
				colors={colors}
				updatedList={updatedList}
				regenerate={generateCodeList}
				lng={lng}
				t={t}
				titleColor={titleColors[2]}
			/>
			<ShadeList
				updatedList={updatedList}
				regenerate={generateColorList}
				lng={lng}
				t={t}
				titleColor={titleColors[3]}
			/>
		</ShadeGeneratorWrapper>
	)
}