import { generateGroupOptions, generateMapByGroup } from "./functions.ts"
import { Select } from "../../Select/client.tsx"
import { useState } from "react"
import { getGroupIcon, isGroup, isPaletteName } from "../../../../lib/palettes/"
import { PaletteSelectBaseElement } from "../types.ts"

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
	const [palette, setPalette] = useState(
		defaultValue === undefined ? "rainbow monokai" : defaultValue.palette
	)
	const mapByGroup = generateMapByGroup()
	const getPaletteOptions = () => {
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
					const newGroup = target.value
					if (!isGroup(newGroup)) return
					setGroup(newGroup)
					setPalette("_")
				}}
				id={`${local}-group-select`}
				namespace="palettes"
				label={label.group === undefined ? "" : label.group}
				options={generateGroupOptions()}
			/>
			<Select
				customStyle={customStyle}
				onHeader={false}
				defaultValue={palette}
				Button={Button}
				iconId={getGroupIcon(group)}
				onSelectChange={(event) => {
					const newPaletteName = event.target.value
					if (newPaletteName !== "_" && !isPaletteName(newPaletteName)) return
					onSelect(event)
					setPalette(newPaletteName)
				}}
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
