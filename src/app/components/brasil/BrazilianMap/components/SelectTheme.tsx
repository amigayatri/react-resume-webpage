import { ChangeEvent, useState } from "react"
import { TFunction } from "i18next"
import { palettesMap } from "../../../../constants/palettes"
import { Select } from "../../../common/Select/client.tsx"
import Element from "../../../../types/ElementProps.ts"

interface SelectThemeProps extends Element {
	changeName: (arg0: string) => void
	changeFn: (arg0: string[], arg1: number) => void
	contrast: number
	changeContrast: (arg0: number) => void
	t: TFunction<any, undefined>
	selectStyle: {
		label: {
			bg: string
			text: string
		}
		select: {
			bg: string
			text: string
			border: string
		}
	}
}

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
	const [groupNames] = useState(Array.from(palettesMap.keys()))
	const [palette, setPalette] = useState("rainbow monokai")
	const palettesInGroup = palettesMap.has(group)
		? palettesMap.get(group)
		: new Map()
	const palettesNames = Array.from(palettesInGroup?.keys() || [])
	const handleChangeTheme = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		setPalette(value)
		const newPalette = palettesInGroup?.get(value)
		changeFn(newPalette !== undefined ? newPalette.colors : [], contrast)
		changeName(t(`names.${group}.${value}`))
	}
	const handleChangeContrast = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		changeContrast(Number.parseFloat(value))
	}
	const groupOptions = groupNames.map((name) => {
		return { value: name, key: "palettes.groups." + name }
	})
	const paletteOptions = palettesNames.map((name) => {
		return { value: name, key: `palettes.names.${group}.${name}` }
	})
	const filterOptions = Array.from(filters.entries()).map(([id, value]) => {
		return { value: value.toString(), key: `filters.${id}` }
	})
	return (
		<>
			<Select
				defaultValue={group}
				customStyle={selectStyle}
				fontSize={1.5}
				onHeader={false}
				lng={lng}
				onSelectChange={({ target }) => {
					setGroup(target.value)
				}}
				id="select-theme-group"
				namespace="brasil"
				labelKey="selects.group"
				options={[{ groupKey: "selects.group", options: groupOptions }]}
			/>
			<Select
				defaultValue={palette}
				customStyle={selectStyle}
				fontSize={1.5}
				onHeader={false}
				lng={lng}
				onSelectChange={(e) => handleChangeTheme(e)}
				id="select-theme-in-group"
				namespace="brasil"
				labelKey="selects.palette"
				options={[{ groupKey: "selects.palette", options: paletteOptions }]}
			/>
			<Select
				defaultValue="1"
				fontSize={1.5}
				customStyle={selectStyle}
				onHeader={false}
				lng={lng}
				onSelectChange={(e) => handleChangeContrast(e)}
				id="select-theme-in-group"
				namespace="brasil"
				labelKey="selects.filter"
				options={[{ groupKey: "selects.filter", options: filterOptions }]}
			/>
		</>
	)
}
