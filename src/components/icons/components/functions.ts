import {
	iconKey,
	getAllIconsIds,
	getAvailableGroups,
	getIconsFromGroup,
	getIconsByFirstLetter,
	getLocals,
	getUsedByLocal
} from "../../../icons"
import { getSafePaletteColors } from "../../../lib/palettes"
import { isMobile } from "../../../lib/utils"

const rainbowMonokai = getSafePaletteColors("rainbow", "rainbow monokai")
const colorsSize = rainbowMonokai.length

type getColorByIdx = (idx: number) => string
const getColorByIdx: getColorByIdx = (idx) => {
	return rainbowMonokai[idx % colorsSize]
}

interface WindowSize {
	width: number | null
	height: number | null
}

type getNumberOfColumns = (currWindow: WindowSize, size: number) => number
const getNumberOfColumns: getNumberOfColumns = (currWindow, size) => {
	const currWidth = currWindow.width
	if (currWidth === null) return 1
	const iconWrapperSize = size + 48
	const listSize = isMobile(currWidth) ? currWidth - 64 : currWidth - 128
	return Math.floor(listSize / iconWrapperSize)
}

interface TranslationKey {
	key: string
	tOptions?: { [_key: string]: string | undefined }
}

interface IconGroupInfo {
	newTitle: TranslationKey
	newIcons: iconKey[]
}

const allIcons = getAllIconsIds()
const groups = new Set(getAvailableGroups())
const locals = new Set(getLocals())

type getGroupInfo = (group: string) => IconGroupInfo
const getGroupInfo: getGroupInfo = (group) => {
	if (group === "all") {
		return {
			newTitle: { key: "options.all" },
			newIcons: allIcons
		}
	} else if (groups.has(group)) {
		return {
			newTitle: { key: `options.${group}` },
			newIcons: getIconsFromGroup(group)
		}
	} else if (locals.has(group)) {
		return {
			newTitle: {
				key: `options.local`,
				tOptions: {
					localKey: group
				}
			},
			newIcons: getUsedByLocal(group)
		}
	} else if (group.length === 1) {
		return {
			newTitle: {
				key: "options.letter",
				tOptions: { letterChar: group }
			},
			newIcons: getIconsByFirstLetter(group)
		}
	}
	return {
		newTitle: { key: "" },
		newIcons: []
	}
}

export { getColorByIdx, getNumberOfColumns, getGroupInfo }
