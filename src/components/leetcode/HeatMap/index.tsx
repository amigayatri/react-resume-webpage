import { useState, useEffect } from "react"
import { HeatMapWrapper } from "./HeatMap.styled"
import Loading from "../../common/Loading"
import { Color } from "../../../lib/colors"
import Month from "./Month"
import MonthProps from "../../../types/MonthProps"
import DayProps from "../../../types/DayProps"
import Header from "./Header"

interface HeatMapProps {
	calendar: {
		[key: string]: number
	}
}

const emptyMonths: MonthProps[] = []
const emptyDays: DayProps[] = []
const possibleColors = new Color("#f92472")
const colorsArr = Array.from(possibleColors.variations.keys())
const half = Math.floor(colorsArr.length / 2)
let max = -1
let zeroColor = "#000000"

const HeatMap = ({ calendar }: HeatMapProps) => {
	const [months, setMonths] = useState(emptyMonths)
	useEffect(() => {
		const daysByMonth = new Map()
		for (let [day, excercises] of Object.entries(calendar)) {
			const date = new Date(Number(day) * 1000)
			const month = date.getMonth()
			const monthArr = daysByMonth.has(month) ? daysByMonth.get(month) : []
			monthArr.push([date, excercises])
			daysByMonth.set(month, monthArr)
			if (excercises > max) max = excercises
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
				monthObjArr.push({ zeroColor, days: daysByMonth.get(month) })
			} else {
				monthObjArr.push({ zeroColor, days: emptyDays })
			}
		}
		setMonths(monthObjArr)
	}, [])
	const showMonths = () => {
		return months.map(({ days, zeroColor }, i) => {
			return (
				<Month days={days} zeroColor={zeroColor} key={"heatmap-month-" + i} />
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
				<Header />
				{showMonths()}
			</HeatMapWrapper>
		)
	}
}

export default HeatMap
