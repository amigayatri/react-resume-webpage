import { SelectStyleProps } from "../../../../../../types/common"

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
const unsetValue = "_"

<<<<<<< HEAD
export { citySelectProps, selectCommonProps, unsetValue }

=======
export { selectCommonProps, unsetValue, citySelectProps }
>>>>>>> 1ddbba537b54cd70dfcd2b77c2523da6fe4be7a8
