import {
	ColorType,
	targetVariations,
	targetPair,
	target,
	ControllerClass
} from "../../../../lib/colors/types"
import { SimpleColor } from "../../../../types/colors"
import { BaseElementProps, ElementProps } from "../../../../types/common/"

interface ColorElementProps extends BaseElementProps {
	titleColor: string
}

export interface AddColorProps extends ColorElementProps {
	add: (arg0: string) => void
	regenerate: () => void
	controller: ControllerClass
	colors: string[]
}

export interface ColorItemProps {
	color: SimpleColor
	remove: (code: string) => void
}

export type colorsMap = Map<target, ColorType>

type addPalette = (group: string, palette: string) => void
export interface ColorListProps extends ColorElementProps {
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

export type colorFunction = "target" | "color"

export interface PaletteSelectProps extends ElementProps {
	addPalette: addPalette
	isShowing: boolean
	colorFunction: colorFunction
}
export interface PaletteSelectBaseProps extends BaseElementProps {}
export interface PaletteSelectBaseProps extends PaletteSelectProps {}
export interface ShadeGeneratorProps extends ElementProps {}
export interface ShadeGeneratorBaseProps extends BaseElementProps {}
export interface ShadeGeneratorBaseProps extends ShadeGeneratorProps {}
export interface ShadeItemProps extends SimpleColor {
	base: boolean
}
export interface ShadeListProps extends ColorElementProps {
	regenerate: () => ColorType[]
	updatedList: boolean
}

export type emptyColor = ColorType[]
export interface ShadeSubSectionProps extends BaseElementProps {
	color: ColorType
}
export type showSquare = (color: SimpleColor) => JSX.Element
export type showTargetsVariations = (
	arg0: [target, targetVariations]
) => JSX.Element | undefined

export interface TargetListProps extends ColorElementProps {
	updatedList: boolean
	controller: ControllerClass
	targets: targetPair[]
	addPalette: addPalette
	regenerate: () => void
}
type activeButton = string
type changeActive = (nowActive: activeButton) => void

type tSuffix = {
	[key in "true" | "false"]: string
}
type tKey = {
	suffix: tSuffix
	tId: string
	prefix: string
}
export interface ButtonProps extends BaseElementProps {
	id: activeButton
	onClick: changeActive
	active: activeButton
	tKey: tKey
	color: string
}
export type tOptionsGenerate = (tId: string) => tKey

export type handleChange = (arg0: string) => void
export interface InputProps extends BaseElementProps {
	isActive: boolean
	onChange: handleChange
	defaultValue: number | string | undefined
	elementId: string
}

interface RawButton {
	tId: string
}

interface RawInput {
	onChange: handleChange
	defaultValue?: string | number
}

export type inputType = "steps" | "color" | "text"
export interface InputBase {
	id: activeButton
	button: RawButton
	input: RawInput
	type: inputType
}

export interface ColorControllerProps extends BaseElementProps {
	inputs: InputBase[]
	controller: ControllerClass
	active: activeButton
	handleActive: changeActive
	colors: string[]
}
export interface ChangeStepsProps extends InputProps {
	controller: ControllerClass
}

type setActive = [activeButton, changeActive]

export interface HeroProps extends BaseElementProps {
	steps: number
	setActive: setActive
}