import { palettesMap } from "./"
import { GroupProps } from "../../types/common/"
import {
	genGroupsType,
	genOptionsType,
	genPaletteOptionsType
} from "../../types/palette/"

export const generatePaletteOptions: genPaletteOptionsType = (
	byGroup: boolean
) => {
	const groupOptions: GroupProps = { groupKey: "select.group", options: [] }
	const generateOptions: genOptionsType = (group, name) => {
		const value = `${group}_${name}`
		return { key: `names.${group}.${name}`, value, name }
	}
	const generateGroups: genGroupsType = ([group, palettes]) => {
		if (byGroup) {
			groupOptions.options.push({ value: group, key: `groups.${group}` })
		}
		return {
			size: palettes.size,
			group,
			groupKey: `groups.${group}`,
			options: Array.from(palettes.keys(), (name) =>
				generateOptions(group, name)
			)
		}
	}
	const palettesOptions = Array.from(palettesMap, generateGroups)
	return { palettes: palettesOptions, groups: groupOptions }
}
