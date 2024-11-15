import { generatePaletteOptions } from "./functions.ts"
import { Select } from "../../Select/client.tsx"
import { PaletteSelectBaseElement } from "../types.ts"

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
			options={generatePaletteOptions(addMultiple === true)}
			fontSize={fontSize}
		/>
	)
}
