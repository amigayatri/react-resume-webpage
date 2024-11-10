import BaseElement from "../../../types/BaseElementProps.ts"
import { TFunction } from "i18next"
import { useEffect, useState } from "react"
import { List, ListWrapper } from "./Holidays.styled.ts"
import BrazilianAPI from "../../../../api/Brazil"
import Holiday from "../../../types/HolidayProps"
import { HolidayList } from "../HolidayList/"
import { CitySelector } from "../CitySelector/"
import { Tab, TabPanel } from "react-tabs"

interface HolidaysBaseProps extends BaseElement {
	t: TFunction<any, undefined>
}

export const HolidaysBase = ({ t, lng, i18n }: HolidaysBaseProps) => {
	const empty: Holiday[] = []
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
				i18n={i18n}
				thisYear={thisYear}
				nextYear={nextYear}
				setThisYear={setThisYear}
				setNextYear={setNextYear}
			/>
			<List>
				<Tab tabIndex="0">{t("tabs.this")}</Tab>
				<Tab tabIndex="0">{t("tabs.next")}</Tab>
			</List>
			<TabPanel>
				<HolidayList t={t} lng={lng} i18n={i18n} list={thisYear} />
			</TabPanel>
			<TabPanel>
				<HolidayList t={t} lng={lng} i18n={i18n} list={nextYear} />
			</TabPanel>
		</ListWrapper>
	)
}
