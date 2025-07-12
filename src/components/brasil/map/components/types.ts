import { DefaultTheme } from "styled-components"
import { ContrastChecker } from "../../../../lib/colors"
import {
	BaseElementProps,
	ElementProps,
	GroupProps,
	SelectStyleProps
} from "../../../../types/common"
import { PaletteInfoProps } from "../../../../types/palette"
import { contrastId, contrastValue } from "./lib/contrast"
import { ControlsClass } from "./lib/controls"

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


export type handleTheme = (arg0: string) => void

export interface SelectThemeProps extends SelectElementProps {
	changeContrast: changeContrast
	handleTheme: handleTheme
	selected: PaletteInfoProps
	controls: ControlsClass
	contrast: {
		id: contrastId, 
		value: contrastValue
	}
}

type changeDivision = (arg0: string) => void

export interface SelectDivisionProps extends SelectElementProps {
	defaultVal: string
	changeDivision: changeDivision
}
export type generateOptions = () => GroupProps[]
export type handleChangeDivision = (newDivision: string) => Promise<void>
export type handleChangeColors = (newColors: string[], newInfo?: number | ContrastChecker | string) => void

export interface ControlProps extends BaseElementProps {
    controls: ControlsClass
    theme: DefaultTheme
    changeDivision: handleChangeDivision
	updateParams: () => void
}
