import { getGroups, getNames } from "../../../../lib/palettes/"
import { GroupProps, OptionProps } from "../../../../types/common"
import { groupKey, paletteKey } from "../../../../types/palette"
import { showing } from "../types"

interface PaletteOptionProps extends OptionProps {
    name: paletteKey | groupKey
}
interface PaletteOptionGroupProps extends GroupProps {
    group: groupKey
    size: number
    options: PaletteOptionProps[]
}

type generateOptions = (group: groupKey, name: paletteKey) => PaletteOptionProps
const generateOptions: generateOptions = (group, name) => {
    const value = `${group}_${name}`
    return { key: `names.${group}.${name}`, value, name }
}

type generateMultipleOption = (group: groupKey) => PaletteOptionProps
const generateMultipleOption: generateMultipleOption = (group) => {
    return {
        value: "#" + group,
        key: "select.addAll",
        name: group,
        tOptions: { groupName: `groups.${group}` }
    }
}

type generateGroups = (arg0: groupKey, arg1: boolean) => PaletteOptionGroupProps
const generateGroups: generateGroups = (group, addMultiple) => {
    const groupNames = getNames(group)
    const optionsFromGroup = Array.from(groupNames, (name) => generateOptions(group, name))
    const multipleOptions = addMultiple ? [generateMultipleOption(group)] : []
    return {
        size: groupNames.length,
        group,
        groupKey: `groups.${group}`,
        options: [...multipleOptions, ...optionsFromGroup]
    }
}

type generateGroupOptions = () => GroupProps[]
export const generateGroupOptions: generateGroupOptions = () => {
    return [
        {
            groupKey: "select.group",
            options: Array.from(getGroups(), (group) => {
                return { value: group, key: `groups.${group}` }
            })
        }
    ]
}

type validatePalette = (palette: PaletteOptionProps) => boolean
type validateGroup = (opt: PaletteOptionGroupProps, showing?: showing) => GroupProps
const validateGroup: validateGroup = (optGroup, showing) => {
    if (showing === undefined) {
        const { options, groupKey } = optGroup
        return {
            options,
            groupKey
        }
    }
    const { group, groupKey, size, options } = optGroup
    const showingFromGroup = showing.get(group) || new Set()
    if (showingFromGroup.size === size) return { options: [], groupKey }
    const validatePalette: validatePalette = (palette) => {
        return !showingFromGroup.has(palette.name)
    }
    return {
        options: [...options.filter(validatePalette)],
        groupKey
    }
}

type generatePaletteOptions = (addMultiple: boolean, showing?: showing) => GroupProps[]
export const generatePaletteOptions: generatePaletteOptions = (addMultiple, showing) => {
    const palettesOptions = Array.from(getGroups(), (value) => generateGroups(value, addMultiple)).map((optGroup) =>
        validateGroup(optGroup, showing)
    )
    return palettesOptions
}

export const generateMapByGroup: () => Map<string, GroupProps> = () => {
    const rawPalettes = Array.from(getGroups(), (value) => generateGroups(value, false))
    return new Map(Array.from(rawPalettes, ({ group, options, groupKey }) => [group, { options, groupKey }]))
}
