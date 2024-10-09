import { useState, useEffect } from "react"
import { HeatMapWrapper, CalendarWrapper } from "./HeatMap.styled"
import Loading from "../../common/Loading"
import { Color } from "../../../lib/colors"
import Month from "./Month"
import MonthProps from "../../../types/MonthProps"
import DayProps from "../../../types/DayProps"
import Header from "./Header"
import LeetCodeProps from "../../../types/LeetCodeProps"

const emptyMonths: MonthProps[] = []
const emptyDays: DayProps[] = []
const possibleColors = new Color("#f92472")
const colorsArr = Array.from(possibleColors.variations.keys())
const half = Math.floor(colorsArr.length / 2)
let max = -1
let zeroColor = "#000000"

const HeatMap = ({ leetcode }: LeetCodeProps) => {
	const [months, setMonths] = useState(emptyMonths)
	const [reverse, setReverse] = useState(false)
	const [simple, setSimple] = useState(false)
	const changeOrder = () => {
		setReverse(!reverse)
	}
	const changeMode = () => {
		setSimple(!simple)
	}
	useEffect(() => {
		const daysByMonth = new Map()
		leetcode.getCalendar().then((res) => {
			for (let { date, submissions } of res) {
				const month = date.getMonth()
				const monthArr = daysByMonth.has(month) ? daysByMonth.get(month) : []
				monthArr.push([date, submissions])
				daysByMonth.set(month, monthArr)
				if (submissions > max) max = submissions
			}
			const maxColor = max / 10
			const halfMax = Math.floor(maxColor / 2)
			const toUse = []
			for (let i = half - halfMax; i <= half + halfMax + (maxColor & 1); i++) {
				toUse.push(colorsArr[i])
			}
			toUse.reverse()
			zeroColor = colorsArr[half + halfMax + (maxColor & 1) + 1]
			let minMonth = 13,
				maxMonth = -1
			for (let [month, daysInMonth] of daysByMonth) {
				const withColor = []
				for (let [day, exercises] of daysInMonth) {
					withColor.push({
						day,
						exercises,
						color: toUse[Math.floor(exercises / 10)]
					})
				}
				if (month < minMonth) minMonth = month
				if (month > maxMonth) maxMonth = month
				daysByMonth.set(month, withColor)
			}
			const monthObjArr: MonthProps[] = []
			for (let month = minMonth; month <= maxMonth; month++) {
				if (daysByMonth.has(month)) {
					monthObjArr.push({ days: daysByMonth.get(month) })
				} else {
					monthObjArr.push({ days: emptyDays })
				}
			}
			setMonths(monthObjArr)
		})
	}, [])
	const showMonths = () => {
		return months.map(({ days }, i) => {
			return (
				<Month
					days={days}
					simple={simple}
					reverse={reverse}
					zeroColor={zeroColor}
					key={"heatmap-month-" + i}
				/>
			)
		})
	}
	if (months.length === 0) {
		return (
			<HeatMapWrapper>
				<Loading type="pacman" />
			</HeatMapWrapper>
		)
	} else {
		return (
			<HeatMapWrapper>
				<Header
					simple={simple}
					reverse={reverse}
					changeStyle={changeMode}
					changeOrder={changeOrder}
				/>
				<CalendarWrapper $isSimple={simple}>
					{reverse ? showMonths().reverse() : showMonths()}
				</CalendarWrapper>
			</HeatMapWrapper>
		)
	}
}

export default HeatMap
