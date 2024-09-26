import { useEffect, useState } from "react"
import DayProps from "../../../../types/DayProps"
import { MonthWrapper, DaysWrapper } from "./Month.styled"
import Day from "../Day"
import MonthProps from "../../../../types/MonthProps"
import { useTranslation } from "react-i18next"

const emptyDays: DayProps[] = []

const Month = ({ days, zeroColor }: MonthProps) => {
	const [allDays, setAllDays] = useState(emptyDays)
	const [monthName, setMonthName] = useState("")
	const { i18n } = useTranslation()
	useEffect(() => {
		const today = new Date()
		const firstDay = days[0].day
		setMonthName(firstDay.toLocaleString(i18n.language, { month: "long" }))
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
		setAllDays(daysArr)
	}, [])
	console.log(zeroColor)
	return (
		<MonthWrapper>
			<h1>{monthName}</h1>
			<DaysWrapper>
				{allDays.map(({ day, color, exercises }) => (
					<Day
						key={`heatmap-${monthName}-${day.getDate()}`}
						day={day}
						color={color}
						exercises={exercises}
					/>
				))}
			</DaysWrapper>
		</MonthWrapper>
	)
}

export default Month
