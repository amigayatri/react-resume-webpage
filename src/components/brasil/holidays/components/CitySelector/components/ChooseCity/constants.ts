import { iconKey, SelectStyleProps } from "../../../../../../../types/common"

const selectStyle: SelectStyleProps = {
	label: {
		bg: "#67d8ef",
		text: "#212117"
	},
	select: {
		bg: "#212117",
		text: "#f7f7f7",
		border: "#f92472"
	}
}

const selectCommonProps = {
	local: "holidays",
	namespace: "holidays",
	noTranslation: true,
	onHeader: false,
	fontSize: 1.25,
	customStyle: selectStyle
}

const citySelectProps = {
	...selectCommonProps,
	id: "holidays-city"
}
const brasilIconID: iconKey = "brasil"
const unsetValue = "_"

export { brasilIconID, selectCommonProps, citySelectProps, unsetValue }
