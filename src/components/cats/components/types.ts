import { animalKey } from "../../../types/animals"
import { BaseElementProps, ElementProps, iconKey } from "../../../types/common"
export type { animalKey, iconKey }

export interface AnimalListProps {
    list: string[]
    icons: iconKey[]
}

export interface ControlsValues {
    hideEmpty: boolean
    size: number
    count: number
}

interface AnimalsElementProps extends BaseElementProps {
    controls: ControlsValues
}
export type handleControlsChange = (hideEmpty: boolean, count: number, size: number) => void

export interface ControlsProps extends AnimalsElementProps {
    handleChange: handleControlsChange
}

export interface PicturesListsProps extends AnimalsElementProps {
    pictures: [animalKey, AnimalListProps][]
}

export type handleAdd = (arg0: animalKey) => void
export interface AddButtonsProps extends AnimalsElementProps {
    handleAdd: handleAdd
}

export interface RandomListProps extends AnimalsElementProps {
    list: string[]
    id: animalKey
    iconId: iconKey
    idx: number
}
export interface AnimalListElementProps extends ElementProps {}
export interface AnimalListBaseElementProps extends BaseElementProps {}
export interface AnimalListBaseElementProps extends AnimalListElementProps {}
