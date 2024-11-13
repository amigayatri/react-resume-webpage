import { useEffect, useState } from "react"
import {
	MonthWrapper,
	DaysWrapper,
	MonthName,
	MonthStartChar
} from "./Month.styled"
import { Day } from "../Day"
import { useTheme } from "styled-components"
import { DayProps, MonthElementProps } from "../../../../types"

const emptyDays: DayProps[] = []

export const Month = ({
	days,
	zeroColor,
	isReversed,
	isSimple,
	lng
}: MonthElementProps) => {
	const [allDays, setAllDays] = useState(emptyDays)
	const [monthLong, setMonthLong] = useState("")
	const [monthNarrow, setMonthNarrow] = useState("")
	useEffect(() => {
		const today = new Date()
		const firstDay = days[0].day
		setMonthLong(firstDay.toLocaleString(lng, { month: "long" }))
		setMonthNarrow(firstDay.toLocaleString(lng, { month: "narrow" }))
		const monthNum = firstDay.getMonth()
		const yearNum = firstDay.getFullYear()
		const lastDayNum =
			today.getMonth() === monthNum
				? today.getDate()
				: new Date(yearNum, monthNum + 1, 0).getDate()
		const daysInMonth = new Map()
		for (const { day, exercises, color } of days) {
			const dayNumber = day.getDate()
			daysInMonth.set(dayNumber, { day, exercises, color })
		}
		const daysArr = []
		for (let i = 1; i <= lastDayNum; i++) {
			if (!daysInMonth.has(i)) {
				daysArr.push({
					day: new Date(yearNum, monthNum, i),
					color: zeroColor,
					exercises: 0
				})
			} else {
				daysArr.push(daysInMonth.get(i))
			}
		}
		isReversed && daysArr.reverse()
		setAllDays(daysArr)
	}, [isReversed])
	const theme = useTheme()
	return (
		<MonthWrapper>
			{!isSimple && <MonthName>{monthLong}</MonthName>}
			<DaysWrapper $isSimple={isSimple}>
				<MonthStartChar>{monthNarrow}</MonthStartChar>
				{allDays.map(({ day, color, exercises }) => (
					<Day
						isDark={theme.primary === theme.white}
						isSimple={isSimple}
						key={`heatmap-${monthNarrow}-${day.getDate()}`}
						day={day}
						color={color}
						exercises={exercises}
					/>
				))}
			</DaysWrapper>
		</MonthWrapper>
	)
}
