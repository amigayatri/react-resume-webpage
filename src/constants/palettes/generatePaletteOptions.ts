import { palettesMap } from "./"
import { GroupProps, OptionProps } from "../../components/common/Select"
import PaletteGroup from "../../types/palette/PaletteGroupProps"

export interface PaletteOptionProps extends OptionProps {
	name: string
}

export interface PaletteGroupProps extends GroupProps {
	group: string
	size: number
	options: PaletteOptionProps[]
}

type genPaletteOptionsType = (byGroup: boolean) => {
	palettes: PaletteGroupProps[]
	groups: GroupProps
}
type genOptionsType = (group: string, name: string) => PaletteOptionProps
type genGroupsType = (arg0: [string, PaletteGroup]) => PaletteGroupProps

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
