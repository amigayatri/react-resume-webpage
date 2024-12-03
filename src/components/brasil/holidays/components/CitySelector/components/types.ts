import { Dispatch, SetStateAction } from "react"
import { BaseElementProps } from "../../../../../../types/common"
import { NewHolidays, statePresentMap } from "../functions"
import { MunicipalQuantity } from "./functions"

type handleAdd = () => void

export interface OpenButtonProps extends BaseElementProps {
	openState: [boolean, Dispatch<SetStateAction<boolean>>]
}

export interface AddButtonProps extends BaseElementProps {
	cityName: string
	stateName: string
	handleAdd: handleAdd
}

type stringStatePair = [string, Dispatch<SetStateAction<string>>]

export interface ChooseCityProps extends BaseElementProps {
	cityPair: stringStatePair
	statePair: stringStatePair
}

export interface AddCityProps extends BaseElementProps {
	addDates: (newDates: NewHolidays) => void
}

export interface PresentListProps extends BaseElementProps {}

export interface StateProps extends BaseElementProps {
	state: string
	idx: number
}

export interface CityProps extends BaseElementProps {
	name: string
	qtty: MunicipalQuantity
	idx: number
}

export type { statePresentMap }
