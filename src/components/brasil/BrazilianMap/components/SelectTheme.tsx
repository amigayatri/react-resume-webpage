import { ChangeEvent, useState } from "react"
import { palettesMap } from "../../../../constants/palettes"
import { Select, PaletteSelect } from "../../../common/client.tsx"
import { SelectThemeProps } from "../../types.ts"

const filters = new Map([
	["no", 1],
	["minimum", 0.6],
	["AAbig", 1 / 3],
	["AAsmall", 1 / 4.5],
	["AAAsmall", 1 / 7]
])

export const SelectTheme = ({
	changeName,
	changeFn,
	contrast,
	changeContrast,
	selectStyle,
	t,
	lng
}: SelectThemeProps) => {
	const [group, setGroup] = useState("rainbow")
	const [palette, setPalette] = useState("rainbow monokai")
	const handleChangeTheme = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		const [newGroup, newPaletteName] = value.split("_")
		setGroup(newGroup)
		setPalette(newPaletteName)
		const palettesInGroup = palettesMap.has(group)
			? palettesMap.get(group)
			: new Map()
		const newPalette = palettesInGroup?.get(newPaletteName)
		changeFn(newPalette !== undefined ? newPalette.colors : [], contrast)
		changeName(t(`names.${newGroup}.${newPaletteName}`))
	}
	const handleChangeContrast = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		changeContrast(Number.parseFloat(value))
	}

	const filterOptions = Array.from(filters.entries()).map(([id, value]) => {
		return { value: value.toString(), key: `filters.${id}` }
	})
	return (
		<>
			<PaletteSelect
				defaultValue={{ group, name: palette }}
				customStyle={selectStyle}
				label={{ palette: t("select.palette"), group: t("select.group") }}
				type="by-group"
				fontSize={1.5}
				local="brasil"
				onSelect={handleChangeTheme}
				lng={lng}
			/>
			<Select
				local="brasil"
				defaultValue="1"
				fontSize={1.5}
				customStyle={selectStyle}
				onHeader={false}
				lng={lng}
				onSelectChange={(e) => handleChangeContrast(e)}
				id="select-theme-in-group"
				iconId="colorfilter"
				namespace="brasil"
				label={t("select.filter")}
				options={[{ groupKey: "select.filter", options: filterOptions }]}
			/>
		</>
	)
}
