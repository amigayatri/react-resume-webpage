import { LeetCode } from "../../../api/LeetCode"
import { BaseElementProps, ElementProps } from "../../../types/common"
import { BadgeProps, ProgrammingLanguageProps } from "../../../types/leetcode"

export interface LeetcodeStatsProps extends ElementProps {}
export interface LeetcodeStatsBaseProps extends BaseElementProps {}
export interface LeetcodeStatsBaseProps extends LeetcodeStatsProps {}

export interface LeetCodeElementProps extends BaseElementProps {
	leetcode: LeetCode
}
export interface BadgeComponentProps extends BaseElementProps {
	badge: BadgeProps
	details: BadgeProps
	setDetails: (badge: BadgeProps) => void
}
export interface DetailedBadgeProps extends BaseElementProps {
	details: BadgeProps
}
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

export interface CalendarProps {
	exercises: number
	day: number
}
export interface CalendarSymbolProps extends CalendarProps {
	color: string
}
export interface ButtonProps extends BaseElementProps {
	fn: () => void
	txt?: string
	icon?: string
}
interface HeatMapElementProps extends BaseElementProps {
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

export interface LanguageItemProps {
	lang: ProgrammingLanguageProps
	max: number
}
