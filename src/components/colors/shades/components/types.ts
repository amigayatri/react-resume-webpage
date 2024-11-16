import {
	Color,
	targetVariations,
	targetPair,
	target
} from "../../../../lib/colors/"
import { SimpleColor } from "../../../../types/colors"
import { BaseElementProps, ElementProps } from "../../../../types/common/"

export interface AddColorProps extends BaseElementProps {
	add: (arg0: string) => void
	regenerate: () => void
}
export interface ColorItemProps {
	color: SimpleColor
	remove: (code: string) => void
}

type addPalette = (group: string, palette: string) => void
export interface ColorListProps extends BaseElementProps {
	regenerate: () => ColorItemProps[]
	colors: { size: number }
	updatedList: boolean
	addPalette: addPalette
}
export type printColor = (
	color: SimpleColor,
	remove: (code: string) => void,
	idx: number
) => JSX.Element
export interface HeroProps extends BaseElementProps {}

export interface PaletteSelectProps extends ElementProps {
	addPalette: addPalette
	isShowing: boolean
}
export interface PaletteSelectBaseProps extends BaseElementProps {}
export interface PaletteSelectBaseProps extends PaletteSelectProps {}
export interface ShadeGeneratorProps extends ElementProps {}
export interface ShadeGeneratorBaseProps extends BaseElementProps {}
export interface ShadeGeneratorBaseProps extends ShadeGeneratorProps {}
export interface ShadeItemProps extends SimpleColor {
	base: boolean
}
export interface ShadeListProps extends BaseElementProps {
	regenerate: () => Color[]
	updatedList: boolean
}

export type emptyColor = Color[]
export interface ShadeSubSectionProps extends BaseElementProps {
	color: Color
}
export type showSquare = (color: SimpleColor) => JSX.Element
export type showTargetsVariations = (
	arg0: [target, targetVariations]
) => JSX.Element | undefined
export interface TargetListProps extends BaseElementProps {
	updatedList: boolean
	targets: targetPair[]
	addPalette: addPalette
	regenerate: () => void
}
