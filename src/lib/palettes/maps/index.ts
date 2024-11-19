import { groupKeys, groupKey, SafePalettePairs } from "./types"
import {
	get,
	paletteKey,
	PaletteProps,
	isPaletteName,
	getNames,
	getGroups
} from "./functions"
import { getGroupIcon } from "./icons"
import { rainbowMonokai } from "./rainbow"

type isGroup = (groupName: any | groupKey) => groupName is groupKey
const isGroup: isGroup = (group): group is groupKey =>
	groupKeys.includes(group as groupKey)

type getSafe = (
	group: groupKey | string,
	palette: paletteKey | string
) => PaletteProps | undefined

const getPalette: getSafe = (group, palette) => {
	if (isGroup(group) && isPaletteName(palette)) {
		return get(group, palette)
	}
}

type getSafePaletteColors = (...[group, palette]: SafePalettePairs) => string[]

const basic = rainbowMonokai.colors
const getSafePaletteColors: getSafePaletteColors = (group, palette) => {
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
export type { groupKey }
