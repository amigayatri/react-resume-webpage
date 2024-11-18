import { generatePaletteOptions } from "./functions.ts"
import { Select } from "../../Select/client.tsx"
import { PaletteSelectBaseElement } from "../types.ts"

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
	return (
		<Select
			customStyle={customStyle}
			onHeader={false}
			defaultValue={
				defaultValue !== undefined
					? `${defaultValue.group}_${defaultValue.palette}`
					: "_"
			}
			iconId="pantone"
			onSelectChange={onSelect}
			id={`${local}-palette-select`}
			label={label.palette}
			namespace="palettes"
			local={local}
			lng={lng}
			options={generatePaletteOptions(addMultiple === true, showing)}
			fontSize={fontSize}
		/>
	)
}
