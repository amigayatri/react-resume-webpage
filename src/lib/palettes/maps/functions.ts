import { paletteKey, PaletteProps, groupMap } from "../../../types/palette"
import { getBrand, isBrand, getBrandNames } from "./brands"
import { getMedia, isMedia, getMediaNames } from "./media"
import { getRainbow, isRainbow, getRainbowNames } from "./rainbow"
import { getTheme, isTheme, getThemeNames } from "./themes"
import { getPlace, isPlace, getPlacesNames } from "./places"
import { getScheme, isScheme, getSchemeNames } from "./schemes"
import { getTech, isTech, getTechNames } from "./tech"
import { groupKey, isGroup } from "./"

type getPalette = (name: paletteKey, map: groupMap) => PaletteProps | undefined
export const getPalette: getPalette = (name, map) => {
	return map.get(name)
}

type getAllFromGroup = () => paletteKey[]
type getGroupNames = (map: groupMap) => paletteKey[]
export const getGroupNames: getGroupNames = (map) => Array.from(map.keys())
export type { paletteKey, PaletteProps, groupMap, getAllFromGroup }

type getPaletteFromGroup = (paletteName: paletteKey) => PaletteProps | undefined
type fnMap = Map<groupKey, getPaletteFromGroup>
const fnMap: fnMap = new Map([
	["brands", getBrand],
	["tech", getTech],
	["theme", getTheme],
	["rainbow", getRainbow],
	["famous media", getMedia],
	["places", getPlace],
	["schemes", getScheme]
])

type get = (group: groupKey, palette: paletteKey) => PaletteProps | undefined
export const get: get = (group, palette) => {
	const groupFn = fnMap.get(group)
	return groupFn !== undefined ? groupFn(palette) : undefined
}

type isPaletteName = (
	paletteName: paletteKey | string
) => paletteName is paletteKey
export const isPaletteName: isPaletteName = (name): name is paletteKey => {
	return (
		isBrand(name) ||
		isMedia(name) ||
		isPlace(name) ||
		isRainbow(name) ||
		isScheme(name) ||
		isTech(name) ||
		isTheme(name)
	)
}

type namesMap = Map<groupKey, getAllFromGroup>
const namesMap: namesMap = new Map([
	["brands", getBrandNames],
	["tech", getTechNames],
	["theme", getThemeNames],
	["rainbow", getRainbowNames],
	["famous media", getMediaNames],
	["places", getPlacesNames],
	["schemes", getSchemeNames]
])

type getGroups = () => groupKey[]
export const getGroups: getGroups = () => Array.from(namesMap.keys())

const emptyKeys: paletteKey[] = []

type getNames = (group: groupKey | string) => paletteKey[]
export const getNames: getNames = (group) => {
	if (!isGroup(group)) return emptyKeys
	const namesFn = namesMap.get(group)
	if (namesFn === undefined) return emptyKeys
	return namesFn()
}
