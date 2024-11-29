import { useEffect, useState } from "react"
import { List, ListWrapper } from "./Holidays.styled.ts"
import BrazilianAPI from "../../../../../api/Brazil"
import { HolidayList } from "../HolidayList/"
import { CitySelector } from "../CitySelector/"
import { Tab, TabPanel } from "react-tabs"
import { HolidaysBaseProps, emptyHolidays } from "../../types.ts"

export const HolidaysBase = ({ t, lng }: HolidaysBaseProps) => {
	const empty: emptyHolidays = []
	const [thisYear, setThisYear] = useState(empty)
	const [nextYear, setNextYear] = useState(empty)
	useEffect(() => {
		const api = new BrazilianAPI()
		api.getNationalHolidays().then((list) => {
			const byYear = new Map()
			const currYear = new Date().getFullYear()
			for (const holiday of list) {
				const holidayYear = holiday.date.getFullYear()
				const prevArr = byYear.has(holidayYear) ? byYear.get(holidayYear) : []
				prevArr.push(holiday)
				byYear.set(holidayYear, prevArr)
			}
			setThisYear(byYear.get(currYear))
			setNextYear(byYear.get(currYear + 1))
		})
	}, [])
	return (
		<ListWrapper>
			<CitySelector
				t={t}
				lng={lng}
				thisYearState={[thisYear, setThisYear]}
				nextYearState={[nextYear, setNextYear]}
			/>
			<List>
				<Tab tabIndex="0">{t("tabs.this")}</Tab>
				<Tab tabIndex="0">{t("tabs.next")}</Tab>
			</List>
			<TabPanel>
				<HolidayList t={t} lng={lng} list={thisYear} />
			</TabPanel>
			<TabPanel>
				<HolidayList t={t} lng={lng} list={nextYear} />
			</TabPanel>
		</ListWrapper>
	)
}
