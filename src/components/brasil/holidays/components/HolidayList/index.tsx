import { HolidayListWrapper, List, Title } from "./HolidayList.styled"
import Holiday from "./Holiday"
import Typewriter from "react-ts-typewriter"
import { HolidayListProps, calculateHolidayInfoType } from "../../types.ts"

const weekend = new Set([6, 0])
const preWeekend = new Set([1, 5])

export const HolidayList = ({ list, t, lng }: HolidayListProps) => {
	const calculateHolidayInfo: calculateHolidayInfoType = ({
		date,
		name,
		type
	}) => {
		const weekday = date.getDay()
		const isWeekend = weekend.has(weekday)
		const isPreWeekend = preWeekend.has(weekday)
		const today: Date = new Date()
		const daysUntill = Math.floor(
			(date.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)
		)
		return { isPreWeekend, isWeekend, daysUntill, date, name, type }
	}
	const info = list
		.map(calculateHolidayInfo)
		.sort((a, b) => a.daysUntill - b.daysUntill)
	const year =
		list.length >= 1 ? list[0].date.getFullYear() : new Date().getFullYear()
	const nationalDates = new Set()
	const title = t("list.year", { yearNumber: year })
	return (
		<HolidayListWrapper>
			<Title>
				<Typewriter text={title} speed={128} />
			</Title>
			<List>
				{info.map((holiday, idx) => {
					if (holiday.type === "national") {
						nationalDates.add(holiday.daysUntill)
					} else if (nationalDates.has(holiday.daysUntill)) {
						return
					}
					return (
						<Holiday
							lng={lng}
							t={t}
							key={"holiday-" + year + idx}
							{...holiday}
						/>
					)
				})}
			</List>
		</HolidayListWrapper>
	)
}
