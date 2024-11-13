import { generatePaletteOptions } from "../../../../constants/palettes/generatePaletteOptions"
import { Select } from "../../Select/client.tsx"
import { PaletteSelectBaseElement } from "../"
import { validateGroupType } from "../../../../types/palette"
export const Plain = ({
	lng,
	onSelect,
	local,
	label,
	defaultValue,
	addMultiple,
	Button,
	fontSize,
	customStyle
}: PaletteSelectBaseElement) => {
	const { palettes } = generatePaletteOptions(false)
	const generateMultipleOption = (group: string) => {
		return {
			value: "#" + group,
			key: "addGroup",
			tOptions: { groupName: `groups.${group}` }
		}
	}
	const validateGroup: validateGroupType = ({ group, groupKey, options }) => {
		const multipleOptions =
			addMultiple === true ? [generateMultipleOption(group)] : []
		return {
			options: [...multipleOptions, ...options],
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
			Button={Button}
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
