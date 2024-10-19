import HolidayProps from "../../../types/HolidayProps"
import { HolidayListWrapper, List, Title } from "./HolidayList.styled"
import Holiday from "./Holiday"
import { useTranslation } from "react-i18next"
import Typewriter from "react-ts-typewriter"
const weekend = new Set([6, 0])
const preWeekend = new Set([1, 5])
interface HolidayListProps {
	list: HolidayProps[]
}

const HolidayList = ({ list }: HolidayListProps) => {
	const calculateHolidayInfo = ({ date, name, type }: HolidayProps) => {
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
	const { t } = useTranslation()
	const nationalDates = new Set()
	const title = t("brazilianHolidays.list.year", { yearNumber: year })
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
					return <Holiday key={"holiday-" + year + idx} {...holiday} />
				})}
			</List>
		</HolidayListWrapper>
	)
}

export default HolidayList
