import { Select } from "../../../common/Select/client.tsx"
import Element from "../../../../types/ElementProps.ts"

const divisionMap = new Map([
	["cities", "../../../../../public/brazil-map-paths/cities.json"],
	["micro", "../../../../../public/brazil-map-paths/micro.json"],
	["meso", "../../../../../public/brazil-map-paths/meso.json"],
	["UF", "../../../../../public/brazil-map-paths/uf.json"],
	["region", "../../../../../public/brazil-map-paths/region.json"],
	["single", "../../../../../public/brazil-map-paths/single.json"]
])

interface SelectDivisionProps extends Element {
	defaultVal: string
	handleChangeDivision: (arg0: string) => void
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

export const SelectDivision = ({
	defaultVal,
	handleChangeDivision,
	lng,
	selectStyle
}: SelectDivisionProps) => {
	const divisionOptions = Array.from(divisionMap.keys())
		.reverse()
		.map((value) => {
			return { value: value, key: `divisions.${value}` }
		})
	return (
		<Select
			customStyle={selectStyle}
			defaultValue={defaultVal}
			fontSize={1.5}
			onHeader={false}
			lng={lng}
			onSelectChange={({ target }) => handleChangeDivision(target.value)}
			id="select-division"
			namespace="brasil"
			labelKey="selects.division"
			options={[{ groupKey: "selects.division", options: divisionOptions }]}
		/>
	)
}
