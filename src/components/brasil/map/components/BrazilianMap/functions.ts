import { DefaultTheme } from "styled-components"
import { getPalette } from "../../../../../lib/palettes"
import { ContrastChecker } from "../../../../../lib/colors/"
import { NewInfo, ContrastInfo, generateOptions } from "./types"
import { SelectStyleProps } from "../../../../../types/common"

const filters = new Map([
	["no", 1],
	["minimum", 0.6],
	["AAbig", 1 / 3],
	["AAsmall", 1 / 4.5],
	["AAAsmall", 1 / 7]
])

const filterIds = new Map([
	[1, "no"],
	[0.6, "minimum"],
	[1 / 3, "AAbig"],
	[1 / 4.5, "AAsmall"],
	[1 / 7, "AAAsmall"]
])

type getContrastInfo = (valueStr: string) => ContrastInfo
export const getContrastInfo: getContrastInfo = (valueStr) => {
	const newContrast = Number.parseFloat(valueStr)
	const newId = filterIds.get(newContrast)
	return {
		id: newId || "",
		value: newContrast
	}
}

export const generateFilterOptions: generateOptions = () => {
	const filterOptions = Array.from(filters.entries()).map(([id, value]) => {
		return { value: value.toString(), key: `filters.${id}` }
	})
	return [{ groupKey: "select.filter", options: filterOptions }]
}

const divisionURLMap = new Map([
	["cities", "/brazil-map-paths/cities.json"],
	["micro", "/brazil-map-paths/micro.json"],
	["meso", "/brazil-map-paths/meso.json"],
	["UF", "/brazil-map-paths/uf.json"],
	["region", "/brazil-map-paths/region.json"],
	["single", "/brazil-map-paths/single.json"]
])

type getDivisionURL = (arg0: string) => string
export const getDivisionURL: getDivisionURL = (division) => {
	const url = divisionURLMap.get(division)
	return url !== undefined ? url : ""
}

export const generateDivisionOptions: generateOptions = () => {
	const divisionOptions = Array.from(divisionURLMap.keys())
		.reverse()
		.map((value) => {
			return { value: value, key: `divisions.${value}` }
		})
	return [
		{
			groupKey: "select.division",
			options: divisionOptions
		}
	]
}

type getNewInfo = (arg0: string) => NewInfo | undefined
export const getNewInfo: getNewInfo = (value) => {
	const [group, name] = value.split("_")
	return getPalette(group, name)
}

interface SimpleTheme {
	background: string
	primary: string
}

const defaultColors = {
	almostBlack: "#212117",
	white: "#f7f7f7",
	purple: "#ac80ff",
	pink: "#f92472",
	blue: "#67d8ef"
}

interface RawTheme {
	background?: string
	primary?: string
}

type isString = (arg0?: string) => arg0 is string
const isString: isString = (val) => typeof val === "string"

type cleanTheme = (arg0: RawTheme) => SimpleTheme
const cleanTheme: cleanTheme = ({ background, primary }) => {
	return {
		background: isString(background) ? background : defaultColors.almostBlack,
		primary: isString(primary) ? primary : defaultColors.white
	}
}

const defaultStyle: SelectStyleProps = {
	label: {
		bg: defaultColors.purple,
		text: defaultColors.almostBlack
	},
	select: {
		bg: defaultColors.white,
		text: defaultColors.almostBlack,
		border: defaultColors.pink
	}
}
type generateSelectStyle = (arg0: DefaultTheme) => SelectStyleProps
export const generateSelectStyle: generateSelectStyle = (theme) => {
	const { purple, almostBlack, primary, background, accent } = theme
	const { label, select } = defaultStyle
	return {
		label: {
			bg: isString(purple) ? purple : label.bg,
			text: isString(almostBlack) ? almostBlack : label.text
		},
		select: {
			bg: isString(primary) ? primary : select.bg,
			text: isString(background) ? background : select.text,
			border: isString(accent) ? accent : select.border
		}
	}
}
export { ContrastChecker }