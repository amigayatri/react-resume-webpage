import { useState, useEffect } from "react"
import { HeatMapWrapper, CalendarWrapper } from "./HeatMap.styled"
import { Loading } from "../../../../common/"
import { createSafeColor } from "../../../../../lib/colors/"
import { Month, Header } from "./components"
import {
	LeetCodeElementProps,
	DayProps,
	MonthProps,
	DayColor
} from "../../types"

const emptyMonths: MonthProps[] = []
const emptyDays: DayProps[] = []
const currSteps = 13
const possibleColors = createSafeColor("#f92472", [currSteps, true])
const whiteVar = possibleColors.variations.get("#FFFFFF")
const colorsArr = Array.from(whiteVar !== undefined ? whiteVar.keys() : [])
const half = Math.floor(colorsArr.length / 2)
let max = -1

export const HeatMap = ({ leetcode, t, lng }: LeetCodeElementProps) => {
	const [months, setMonths] = useState(emptyMonths)
	const [isReversed, setIsReversed] = useState(false)
	const [isSimple, setIsSimple] = useState(false)
	const [zeroColor, setZeroColor] = useState({
		light: colorsArr[half],
		dark: colorsArr[half]
	})
	const changeOrder = () => {
		setIsReversed(!isReversed)
	}
	const changeMode = () => {
		setIsSimple(!isSimple)
	}
	useEffect(() => {
		const daysByMonth = new Map()
		leetcode.getCalendar().then((res) => {
			for (const { date, submissions } of res) {
				const month = date.getMonth()
				const monthArr = daysByMonth.has(month) ? daysByMonth.get(month) : []
				monthArr.push([date, submissions])
				daysByMonth.set(month, monthArr)
				if (submissions > max) max = submissions
			}
			const maxColor = max / currSteps
			const halfMax = Math.floor(maxColor / 2)
			const toUse: DayColor[] = []
			const lightColors = Array.from(colorsArr)
			const darkColors = Array.from(colorsArr)
			lightColors.reverse()
			for (let i = half - halfMax; i <= half + halfMax + (maxColor & 1); i++) {
				toUse.push({ light: lightColors[i], dark: darkColors[i] })
			}
			const zeroIdx = half + halfMax + (maxColor & 1)
			const zeroColorCalculated = {
				light: lightColors[zeroIdx],
				dark: darkColors[zeroIdx]
			}
			setZeroColor(zeroColorCalculated)
			let minMonth = 13,
				maxMonth = -1
			for (const [month, daysInMonth] of daysByMonth) {
				const withColor = []
				for (const [day, exercises] of daysInMonth) {
					const colorIdx = Math.floor(exercises / currSteps)
					withColor.push({
						day,
						exercises,
						color: toUse[colorIdx]
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
	}, [leetcode])
	const showMonths = () => {
		return months.map(({ days }, i) => {
			return (
				<Month
					t={t}
					lng={lng}
					days={days}
					isSimple={isSimple}
					isReversed={isReversed}
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
					t={t}
					lng={lng}
					isSimple={isSimple}
					isReversed={isReversed}
					changeStyle={changeMode}
					changeOrder={changeOrder}
				/>
				<CalendarWrapper $isSimple={isSimple}>
					{isReversed ? showMonths().reverse() : showMonths()}
				</CalendarWrapper>
			</HeatMapWrapper>
		)
	}
}
