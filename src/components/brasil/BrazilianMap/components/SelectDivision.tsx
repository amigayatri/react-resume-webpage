import { Select } from "../../../common/client.tsx"
import { divisionMap } from "../BrazilianMapBase.tsx"
import { SelectDivisionProps } from "../../types.ts"

export const SelectDivision = ({
	defaultVal,
	handleChangeDivision,
	lng,
	selectStyle,
	t
}: SelectDivisionProps) => {
	const divisionOptions = Array.from(divisionMap.keys())
		.reverse()
		.map((value) => {
			return { value: value, key: `divisions.${value}` }
		})
	return (
		<Select
			local="brasil"
			customStyle={selectStyle}
			defaultValue={defaultVal}
			fontSize={1.5}
			onHeader={false}
			lng={lng}
			onSelectChange={({ target }) => handleChangeDivision(target.value)}
			id="select-division"
			namespace="brasil"
			label={t("select.division")}
			options={[{ groupKey: "select.division", options: divisionOptions }]}
		/>
	)
}
