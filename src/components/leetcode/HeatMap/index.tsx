import { useState, useEffect } from "react"
import { HeatMapWrapper } from "./HeatMap.styled"
import Loading from "../../common/Loading"
import { Color } from "../../../lib/colors"
import Month from "./Month"
import DayProps from "../../../types/DayProps"

interface HeatMapProps {
	calendar: {
		[key: string]: number
	}
}

const possibleColors = new Color("#f92472")
const colorsArr = Array.from(possibleColors.variations.keys())
const half = Math.floor(colorsArr.length / 2)
let max = -1

const HeatMap = ({ calendar }: HeatMapProps) => {
	const [months, setMonths] = useState(new Map<number, DayProps[]>())
	const [zeroColor, setZeroColor] = useState("#000000")
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
			toUse.push(colorsArr.at(-i))
		}
		setZeroColor(colorsArr[half + halfMax + (maxColor & 1) + 1])
		for (let [month, daysInMonth] of daysByMonth) {
			const withColor = []
			for (let [day, exercises] of daysInMonth) {
				withColor.push({
					day,
					exercises,
					color: toUse[Math.floor(exercises / 10)]
				})
			}
			daysByMonth.set(month, withColor)
		}
		setMonths(daysByMonth)
	}, [])
	const showMonths = () => {
		const monthObjArr = []
		for (const [month, days] of months.entries()) {
			monthObjArr.push(
				<Month
					zeroColor={zeroColor}
					key={"heatmap-month-" + month}
					days={days}
				/>
			)
		}
		return monthObjArr
	}
	if (months.size === 0) {
		return (
			<HeatMapWrapper>
				<Loading type="pacman" />
			</HeatMapWrapper>
		)
	} else {
		return <HeatMapWrapper>{showMonths()}</HeatMapWrapper>
	}
}

export default HeatMap
