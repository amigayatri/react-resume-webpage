const groupKeys = [
	"theme",
	"rainbow",
	"famous media",
	"brands",
	"places",
	"tech",
	"schemes"
] as const

export type groupKey = (typeof groupKeys)[number]

type isGroup = (groupName: any | groupKey) => groupName is groupKey
const isGroup: isGroup = (group): group is groupKey =>
	groupKeys.includes(group as groupKey)

import {
	get,
	paletteKey,
	PaletteProps,
	isPaletteName,
	getNames,
	getGroups
} from "./functions"
import { getGroupIcon } from "./icons"
type getSafe = (
	group: groupKey | string,
	palette: paletteKey | string
) => PaletteProps | undefined

const getPalette: getSafe = (group, palette) => {
	if (isGroup(group) && isPaletteName(palette)) {
		return get(group, palette)
	}
}

type getSafePaletteColors = (group: groupKey, palette: paletteKey) => string[]
import { rainbowMonokai } from "./rainbow"
const basic = rainbowMonokai.colors
const getSafePaletteColors: getSafePaletteColors = (
	group: groupKey,
	palette: paletteKey
) => {
	const selected = get(group, palette)
	if (selected === undefined) return basic
	return selected.colors
}

export {
	getGroupIcon,
	getPalette,
	isGroup,
	isPaletteName,
	getNames,
	getGroups,
	getSafePaletteColors
}
