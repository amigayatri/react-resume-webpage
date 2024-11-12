import { LeetCode } from "../../api/LeetCode"
import BaseElement from "../common/BaseElementProps"

export interface DayColor {
	light: string
	dark: string
}

export interface DayProps {
	day: Date
	exercises: number
	color: DayColor
	isDark: boolean
	isSimple: boolean
}

export interface MonthProps {
	days: DayProps[]
}

interface HeatMapElementProps extends BaseElement {
	isReversed: boolean
	isSimple: boolean
}

export interface HeatMapHeaderProps extends HeatMapElementProps {
	changeOrder: () => void
	changeStyle: () => void
}

export interface MonthElementProps extends HeatMapElementProps {
	days: DayProps[]
	zeroColor: DayColor
}

export interface BadgeProps {
	name: string
	date: Date
	icon: string
}

export interface LeetCodeProps extends BaseElement {
	leetcode: LeetCode
}

export interface ProgrammingLanguageProps {
	problemsSolved: number
	languageName: string
}

export interface CalendarProps {
	exercises: number
	day: number
}
export interface CalendarSymbolProps extends CalendarProps {
	color: string
}
