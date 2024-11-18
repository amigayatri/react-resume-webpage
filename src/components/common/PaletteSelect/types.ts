import { groupKey, paletteKey } from "../../../types/palette"
import {
	SelectStyleProps,
	ElementProps,
	BaseElementProps,
	onSelectChange
} from "../../../types/common/"

export type showing = Map<string, Set<string>>

interface DefaultPalette {
	palette: paletteKey | "_"
	group: groupKey
}

export interface PaletteSelectElementProps extends ElementProps {
	onSelect: onSelectChange
	local: string
	label: { palette: string; group?: string }
	fontSize: number
	addMultiple?: boolean
	defaultValue?: DefaultPalette
	showing?: showing
	Button?: React.ReactElement
	customStyle?: SelectStyleProps
}

export interface PaletteSelectBaseElement extends PaletteSelectElementProps {}
export interface PaletteSelectBaseElement extends BaseElementProps {}

export interface PaletteSelectProps extends PaletteSelectElementProps {
	type: string
}

export interface PaletteSelectBaseProps extends PaletteSelectProps {}
export interface PaletteSelectBaseProps extends BaseElementProps {}
