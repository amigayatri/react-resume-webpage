import { PaletteSelect, Select } from "../../../../common/client.tsx"
import { generateFilterOptions } from "../lib"
import { SelectThemeProps } from "../types.ts"

export const SelectTheme = ({
	handleTheme,
	changeContrast,
	selectStyle,
	t,
	selected,
	controls,
	contrast,
	lng
}: SelectThemeProps) => {
	console.log("selected", selected, controls.palette)
	return (
		<>
			<PaletteSelect
				defaultValue={{ group: controls.palette.group, palette: controls.palette.name }}
				customStyle={selectStyle}
				label={{ palette: t("select.palette"), group: t("select.group") }}
				type="by-group"
				fontSize={1.5}
				local="map"
				onSelect={({ target }) => {
					handleTheme(target.value)
				}}
				lng={lng}
			/>
			<Select
				local="brasil"
				defaultValue={contrast.value.toString()}
				fontSize={1.5}
				customStyle={selectStyle}
				onHeader={false}
				lng={lng}
				onSelectChange={({ target }) => {
					changeContrast(target.value)
				}}
				id="select-theme-in-group"
				iconId="colorfilter"
				namespace="map"
				label={t("select.filter")}
				options={generateFilterOptions()}
			/>
		</>
	)
}
