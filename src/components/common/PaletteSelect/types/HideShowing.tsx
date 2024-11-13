import { generatePaletteOptions } from "../../../../constants/palettes/generatePaletteOptions"
import { Select } from "../../Select/client.tsx"
import { PaletteSelectBaseElement } from "../"
import {
	PaletteOptionProps,
	validateGroupType
} from "../../../../types/palette"

export const HideShowing = ({
	lng,
	onSelect,
	local,
	label,
	defaultValue,
	showing,
	addMultiple,
	fontSize,
	customStyle
}: PaletteSelectBaseElement) => {
	if (showing === undefined) return
	const { palettes } = generatePaletteOptions(false)
	const generateMultipleOption = (group: string) => {
		return {
			value: "#" + group,
			key: "addGroup",
			tOptions: { groupName: `groups.${group}` }
		}
	}
	const validateGroup: validateGroupType = ({
		group,
		groupKey,
		size,
		options
	}) => {
		const showingFromGroup = showing.get(group) || new Set()
		if (showingFromGroup.size === size) return { options: [], groupKey }
		const validatePalette = (palette: PaletteOptionProps) =>
			!showingFromGroup.has(palette.name)
		const multipleOptions =
			addMultiple === true ? [generateMultipleOption(group)] : []
		return {
			options: [...multipleOptions, ...options.filter(validatePalette)],
			groupKey
		}
	}
	const validOptions = palettes.map(validateGroup)

	return (
		<Select
			customStyle={customStyle}
			onHeader={false}
			defaultValue={
				defaultValue !== undefined
					? `${defaultValue.group}_${defaultValue.name}`
					: "_"
			}
			iconId="pantone"
			onSelectChange={onSelect}
			id={`${local}-palette-select`}
			label={label.palette}
			namespace="palettes"
			local={local}
			lng={lng}
			options={validOptions}
			fontSize={fontSize}
		/>
	)
}
