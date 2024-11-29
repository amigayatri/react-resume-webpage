import { Select } from "../../../../../common/client.tsx"
import { SelectDivisionProps } from "../types.ts"
import { generateDivisionOptions } from "../functions.ts"

export const SelectDivision = ({
	defaultVal,
	changeDivision,
	lng,
	selectStyle,
	t
}: SelectDivisionProps) => {
	return (
		<Select
			local="brasil"
			customStyle={selectStyle}
			defaultValue={defaultVal}
			fontSize={1.5}
			onHeader={false}
			lng={lng}
			iconId="brasil"
			onSelectChange={({ target }) => changeDivision(target.value)}
			id="select-division"
			namespace="map"
			label={t("select.division")}
			options={generateDivisionOptions()}
		/>
	)
}
