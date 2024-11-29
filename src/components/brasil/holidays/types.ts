import { Dispatch, SetStateAction } from "react"
import { BaseElementProps, ElementProps } from "../../../types/common"
import { HolidayProps, StateProps } from "../../../types/holidays"

type holidayState = [HolidayProps[], Dispatch<SetStateAction<HolidayProps[]>>]

export interface CitySelectorProps extends BaseElementProps {
	thisYearState: holidayState
	nextYearState: holidayState
}
export type emptyStates = StateProps[]
export type emptyHolidays = HolidayProps[]
export interface HeroProps extends ElementProps {}
export interface HeroBaseProps extends HeroProps {}
export interface HeroBaseProps extends BaseElementProps {}
export interface VisualDescriptionProps extends BaseElementProps {}
export interface HolidaysProps extends ElementProps {}
export interface HolidaysBaseProps extends HolidaysProps {}
export interface HolidaysBaseProps extends BaseElementProps {}
export interface HolidayListProps extends BaseElementProps {
	list: HolidayProps[]
}
interface HolidayInfoProps extends HolidayProps {
	isPreWeekend: boolean
	isWeekend: boolean
	daysUntill: number
}
export type calculateHolidayInfoFn = (holiday: HolidayProps) => HolidayInfoProps
export interface HolidayElementProps extends HolidayInfoProps {
	isWeekend: boolean
	isPreWeekend: boolean
	daysUntill: number
}
export interface HolidayElementProps extends BaseElementProps {}
