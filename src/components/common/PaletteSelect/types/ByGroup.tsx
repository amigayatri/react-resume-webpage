import { generatePaletteOptions } from "../../../../constants/palettes/generatePaletteOptions"
import { Select } from "../../Select/client.tsx"
import { PaletteSelectBaseElement } from "../"
import { GroupProps } from "../../Select/"
import { useState } from "react"
import { groupIcons } from "../../../../constants/palettes/"

export const ByGroup = ({
	lng,
	onSelect,
	local,
	label,
	defaultValue,
	Button,
	fontSize,
	customStyle
}: PaletteSelectBaseElement) => {
	const [group, setGroup] = useState(
		defaultValue === undefined ? "rainbow" : defaultValue.group
	)
	const { palettes, groups } = generatePaletteOptions(true)
	const mapByGroup: Map<string, GroupProps> = new Map(
		Array.from(palettes, ({ group, options, groupKey }) => [
			group,
			{ options, groupKey }
		])
	)
	const getPaletteOptions: () => GroupProps[] = () => {
		const groupOptions = mapByGroup.get(group)
		if (groupOptions === undefined) return [{ groupKey: "", options: [] }]
		return [groupOptions]
	}
	return (
		<>
			<Select
				iconId="pantone"
				local={local}
				defaultValue={group}
				customStyle={customStyle}
				fontSize={1.5}
				onHeader={false}
				lng={lng}
				onSelectChange={({ target }) => {
					setGroup(target.value)
				}}
				id={`${local}-group-select`}
				namespace="palettes"
				label={label.group === undefined ? "" : label.group}
				options={[groups]}
			/>
			<Select
				customStyle={customStyle}
				onHeader={false}
				defaultValue={
					defaultValue !== undefined
						? `${defaultValue.name}`
						: "rainbow monokai"
				}
				Button={Button}
				iconId={groupIcons.get(group) || ""}
				onSelectChange={onSelect}
				id={`${local}-palette-select`}
				label={label.palette}
				namespace="palettes"
				local={local}
				lng={lng}
				options={getPaletteOptions()}
				fontSize={fontSize}
			/>
		</>
	)
}
