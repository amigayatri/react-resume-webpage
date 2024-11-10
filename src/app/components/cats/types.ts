import { TFunction } from "i18next"
import BaseElement from "../../types/BaseElementProps"
import { Dispatch, SetStateAction } from "react"

export interface AnimalListProps {
	list: string[]
	icons: string[]
}

export interface ControlsValues {
	hideEmpty: boolean
	size: number
	count: number
}

export interface AnimalListBaseProps extends BaseElement {
	t: TFunction<any, undefined>
}

interface AnimalsElementProps extends AnimalListBaseProps {
	controls: ControlsValues
}

export interface ControlsProps extends AnimalsElementProps {
	setControls: Dispatch<SetStateAction<ControlsValues>>
}

export interface PicturesListsProps extends AnimalsElementProps {
	pictures: [string, AnimalListProps][]
}

export interface AddButtonsProps extends AnimalsElementProps {
	handleAdd: (arg0: string) => void
}
export interface RandomListProps extends AnimalsElementProps {
	list: string[]
	id: string
	iconId: string
	idx: number
}
