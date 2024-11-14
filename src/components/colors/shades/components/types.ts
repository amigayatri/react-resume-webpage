import { Color } from "../../../../lib/colors"
import { SimpleColor, targetVariationsType } from "../../../../types/colors"
import { BaseElementProps, ElementProps } from "../../../../types/common/"

export interface AddColorProps extends BaseElementProps {
	add: (arg0: string) => void
	regenerate: () => void
}
export interface ColorItemProps {
	color: SimpleColor
	remove: (code: string) => void
}

export interface ColorListProps extends BaseElementProps {
	regenerate: () => { color: SimpleColor; remove: (code: string) => void }[]
	colors: { size: number }
	updatedList: boolean
	addPalette: (group: string, palette: string) => void
}
export type printColorType = (
	color: SimpleColor,
	remove: (code: string) => void,
	idx: number
) => JSX.Element
export interface HeroProps extends BaseElementProps {}

export interface PaletteSelectProps extends ElementProps {
	addPalette: (group: string, palette: string) => void
	isShowing: boolean
}
export interface PaletteSelectBaseProps extends BaseElementProps {}
export interface PaletteSelectBaseProps extends PaletteSelectProps {}
export interface ShadeGeneratorProps extends ElementProps {}
export interface ShadeGeneratorBaseProps extends BaseElementProps {}
export interface ShadeGeneratorBaseProps extends ShadeGeneratorProps {}
export interface ShadeItemProps {
	inverse: string
	base: boolean
	code: string
}
export interface ShadeListProps extends BaseElementProps {
	regenerate: () => Color[]
	updatedList: boolean
}
export type emptyColorType = Color[]
export interface ShadeSubSectionProps extends BaseElementProps {
	color: Color
}
export type showSquareType = (color: SimpleColor) => JSX.Element
export type showTargetsVariationsType = (
	arg0: [string, targetVariationsType]
) => JSX.Element
export interface TargetListProps extends BaseElementProps {
	updatedList: boolean
	targets: string[][]
	regenerate: () => void
}
