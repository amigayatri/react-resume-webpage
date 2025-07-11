import { Dispatch, SetStateAction } from "react"
import { BaseElementProps, ElementProps, iconKey } from "../../../../types/common"
import { PaletteInfoProps, PaletteProps, groupKey, paletteKey } from "../../../../types/palette"

export interface PaletteElementProps extends BaseElementProps {
    palette: PaletteProps
    info: PaletteInfoProps
    remove: (group: groupKey, name: paletteKey) => void
}
export interface PaletteAnchorsProps extends BaseElementProps {
    list: PaletteInfoProps[]
}
export interface PalettesListProps extends ElementProps {}
export interface PalettesListBaseProps extends PalettesListProps {}
export interface PalettesListBaseProps extends BaseElementProps {}
export type emptyPalettes = PaletteProps[]
export type emptyNames = PaletteInfoProps[]
export interface PaletteControlProps extends BaseElementProps {
    allCodes: string
    info: PaletteInfoProps
    remove: (group: groupKey, name: paletteKey) => void
    sortedState: [boolean, Dispatch<SetStateAction<boolean>>]
    ascendingState: [boolean, Dispatch<SetStateAction<boolean>>]
}
export interface SortControlProps extends BaseElementProps {
    sortedState: [boolean, Dispatch<SetStateAction<boolean>>]
    ascendingState: [boolean, Dispatch<SetStateAction<boolean>>]
}
export interface ControlButtonProps extends BaseElementProps {
    selected: boolean
    icon: iconKey
    onClick: () => void
}
export interface DeleteButtonProps extends BaseElementProps {
    info: PaletteInfoProps
    remove: (group: groupKey, name: paletteKey) => void
}

export interface CopyButtonProps extends BaseElementProps {
    allCodes: string
    info: PaletteInfoProps
}

export interface SelectProps extends BaseElementProps {
    showing: Map<groupKey, Set<paletteKey>>
    add: (group: groupKey, name: paletteKey) => void
}
