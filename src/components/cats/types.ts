import { BaseElementProps } from "../../types/common/"
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

interface AnimalsElementProps extends BaseElementProps {
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
