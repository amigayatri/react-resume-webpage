import { Select, PaletteSelect } from "../../../../../common/client.tsx"
import { SelectThemeProps } from "../types.ts"
import { generateFilterOptions } from "../functions.ts"

export const SelectTheme = ({
	handleTheme,
	changeContrast,
	selectStyle,
	t,
	selected,
	lng
}: SelectThemeProps) => {
	return (
		<>
			<PaletteSelect
				defaultValue={{ group: selected.group, palette: selected.name }}
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
				defaultValue="1"
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
