import { BaseElementProps, ElementProps } from "../../../../types/common"
import {
	PaletteInfoProps,
	PaletteProps,
	groupKey,
	paletteKey
} from "../../../../types/palette"

export interface PaletteElementProps extends BaseElementProps {
	palette: PaletteProps
	info: PaletteInfoProps
}
export interface PaletteAnchorsProps extends BaseElementProps {
	list: PaletteInfoProps[]
}
export interface PalettesListProps extends ElementProps {}
export interface PalettesListBaseProps extends PalettesListProps {}
export interface PalettesListBaseProps extends BaseElementProps {}
export type emptyPalettes = PaletteProps[]
export type emptyNames = PaletteInfoProps[]

export interface SelectProps extends BaseElementProps {
	showing: Map<groupKey, Set<paletteKey>>
	add: (group: groupKey, name: paletteKey) => void
}
