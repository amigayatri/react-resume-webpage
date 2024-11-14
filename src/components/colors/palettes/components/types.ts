import { BaseElementProps, ElementProps } from "../../../../types/common"
import { PaletteInfoProps, PaletteProps } from "../../../../types/palette"

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
export type emptyPalettesType = PaletteProps[]
export type emptyNamesType = PaletteInfoProps[]

export interface SelectProps extends BaseElementProps {
	showing: Map<string, Set<string>>
	add: (group: string, name: string) => void
}
