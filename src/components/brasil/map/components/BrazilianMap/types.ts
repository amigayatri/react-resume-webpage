import {
	BaseElementProps,
	ElementProps,
	SelectStyleProps,
	GroupProps
} from "../../../../../types/common"
import { PaletteInfoProps } from "../../../../../types/palette"

export interface BrazilianMapProps extends ElementProps {}
export interface BrazilianMapBaseProps extends BaseElementProps {}
export interface BrazilianMapBaseProps extends BrazilianMapProps {}
interface SelectElementProps extends BaseElementProps {
	selectStyle: SelectStyleProps
}

export type changeContrast = (arg0: string) => void

export interface NewInfo extends PaletteInfoProps {
	colors: string[]
}

export interface ContrastInfo {
	id: string
	value: number
}

export type handleTheme = (arg0: string) => void

export interface SelectThemeProps extends SelectElementProps {
	changeContrast: changeContrast
	handleTheme: handleTheme
	selected: PaletteInfoProps
}

type changeDivision = (arg0: string) => void

export interface SelectDivisionProps extends SelectElementProps {
	defaultVal: string
	changeDivision: changeDivision
}
export type generateOptions = () => GroupProps[]
export type handleChangeDivision = (newDivision: string) => Promise<void>
