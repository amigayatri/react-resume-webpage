import { groupKey } from "./types"
import {
	getPalette,
	PaletteProps,
	paletteKey,
	getAllFromGroup,
	getGroupNames
} from "./functions"

const themesKeys = [
	"backgrounds",
	"current",
	"grayscalemonokai",
	"fullmonokai",
	"triple",
	"accent"
] as const

export type themeKey = (typeof themesKeys)[number]

const group: groupKey = "theme"

interface ThemePalette extends PaletteProps {
	name: themeKey
	group: "theme"
}

const namedArr: ThemePalette = {
	group,
	name: "current",
	icon: "website",
	colors: ["#212117", "#f92472", "#67d8ef", "#f7f7f7"]
}

const backgrounds: ThemePalette = {
	group,
	name: "backgrounds",
	icon: "website",
	colors: ["#212117", "#f7f7f7"]
}

const accentArr: ThemePalette = {
	group,
	name: "accent",
	icon: "website",
	colors: ["#f92472", "#67d8ef"]
}

const tripleArr: ThemePalette = {
	group,
	name: "triple",
	icon: "website",
	colors: ["#f92472", "#ac80ff", "#67d8ef"]
}

const grayscaleMonokai: ThemePalette = {
	group,
	name: "grayscalemonokai",
	icon: "website",
	colors: [
		"#000000",
		"#212117",
		"#282923",
		"#3e3d32",
		"#74705d",
		"#d0d0c3",
		"#f7f7f7"
	]
}

const fullMonokai: ThemePalette = {
	group,
	name: "fullmonokai",
	icon: "website",
	colors: [
		"#000000",
		"#212117",
		"#282923",
		"#3e3d32",
		"#74705d",
		"#d0d0c3",
		"#f7f7f7",
		"#f83535",
		"#fd9621",
		"#f4cd04",
		"#a6e22c",
		"#67d8ef",
		"#ac80ff",
		"#f92472"
	]
}

type themesMap = Map<themeKey, ThemePalette>

const themes: themesMap = new Map([
	["current", namedArr],
	["grayscalemonokai", grayscaleMonokai],
	["fullmonokai", fullMonokai],
	["triple", tripleArr],
	["accent", accentArr],
	["backgrounds", backgrounds]
])

type isTheme = (paletteName: paletteKey | any) => paletteName is themeKey
export const isTheme: isTheme = (name): name is themeKey => {
	return themesKeys.includes(name)
}

type getTheme = (paletteName: paletteKey) => PaletteProps | undefined
export const getTheme: getTheme = (paletteName) => {
	if (!isTheme(paletteName)) return
	return getPalette(paletteName, themes)
}
export const getThemeNames: getAllFromGroup = () => getGroupNames(themes)
