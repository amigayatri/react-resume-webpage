import { useEffect, useState } from "react"
import DayProps from "../../../../types/DayProps"
import { MonthWrapper, DaysWrapper } from "./Month.styled"
import Day from "../Day"

interface MonthProps {
	days: DayProps[]
	zeroColor: string
}

const emptyDays: DayProps[] = []

const Month = ({ days, zeroColor }: MonthProps) => {
	const [allDays, setAllDays] = useState(emptyDays)
	const [monthName, setMonthName] = useState("")
	useEffect(() => {
		const firstDay = days[0].day
		setMonthName(firstDay.toLocaleString("default", { month: "long" }))
		const monthNum = firstDay.getMonth()
		const yearNum = firstDay.getFullYear()
		const lastDayNum = new Date(yearNum, monthNum + 1, 0).getDate()
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
