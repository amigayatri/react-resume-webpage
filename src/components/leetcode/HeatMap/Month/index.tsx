import { useEffect, useState } from "react"
import DayProps from "../../../../types/DayProps"
import {
	MonthWrapper,
	DaysWrapper,
	MonthName,
	MonthStartChar
} from "./Month.styled"
import Day from "../Day"
import MonthProps from "../../../../types/MonthProps"
import { useTranslation } from "react-i18next"

const emptyDays: DayProps[] = []

interface MonthObjProps extends MonthProps {
	reverse: boolean
	simple: boolean
	zeroColor: string
}

const Month = ({ days, zeroColor, reverse, simple }: MonthObjProps) => {
	const [allDays, setAllDays] = useState(emptyDays)
	const [monthLong, setMonthLong] = useState("")
	const [monthNarrow, setMonthNarrow] = useState("")
	const { i18n } = useTranslation()
	useEffect(() => {
		const today = new Date()
		const firstDay = days[0].day
		setMonthLong(firstDay.toLocaleString(i18n.language, { month: "long" }))
		setMonthNarrow(firstDay.toLocaleString(i18n.language, { month: "narrow" }))
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
		reverse && daysArr.reverse()
		setAllDays(daysArr)
	}, [reverse])
	return (
		<MonthWrapper>
			{!simple && <MonthName>{monthLong}</MonthName>}
			<DaysWrapper $isSimple={simple}>
				<MonthStartChar>{monthNarrow}</MonthStartChar>
				{allDays.map(({ day, color, exercises }) => (
					<Day
						simple={simple}
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

export default Month
