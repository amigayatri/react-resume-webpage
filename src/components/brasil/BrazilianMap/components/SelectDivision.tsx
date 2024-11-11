import { Select } from "../../../common/Select/client.tsx"
import Element from "../../../../types/common/ElementProps.ts"
import SelectStyle from "../../../../types/common/SelectStyleProps.ts"
import { SelectWrapper } from "./Common.styled.ts"
import { TFunction } from "i18next"
import { divisionMap } from "../BrazilianMapBase.tsx"

interface SelectDivisionProps extends Element {
	t: TFunction<any, undefined>
	defaultVal: string
	handleChangeDivision: (arg0: string) => void
	selectStyle: SelectStyle
}

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
		<SelectWrapper>
			<Select
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
		</SelectWrapper>
	)
}
