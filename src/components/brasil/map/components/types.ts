import {
	BaseElementProps,
	ElementProps,
	SelectStyleProps
} from "../../../../types/common"

export interface BrazilianMapProps extends ElementProps {}
export interface BrazilianMapBaseProps extends BaseElementProps {}
export interface BrazilianMapBaseProps extends BrazilianMapProps {}
interface SelectElementProps extends BaseElementProps {
	selectStyle: SelectStyleProps
}
export interface SelectThemeProps extends SelectElementProps {
	changeName: (arg0: string) => void
	changeFn: (arg0: string[], arg1: number) => void
	contrast: number
	changeContrast: (arg0: number) => void
}
export interface SelectDivisionProps extends SelectElementProps {
	defaultVal: string
	handleChangeDivision: (arg0: string) => void
}
