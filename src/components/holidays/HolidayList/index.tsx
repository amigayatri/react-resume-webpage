import HolidayProps from "../../../types/HolidayProps"
import { HolidayListWrapper, List, Title } from "./HolidayList.styled"
import Holiday from "./Holiday"
import { useTranslation } from "react-i18next"
import Typewriter from "react-ts-typewriter"

interface HolidayListProps {
	list: HolidayProps[]
}

const HolidayList = ({ list }: HolidayListProps) => {
	const year =
		list.length >= 1 ? list[0].date.getFullYear() : new Date().getFullYear()
	const { t } = useTranslation()
	const title = t("brazilianHolidays.list.year", { yearNumber: year })
	return (
		<HolidayListWrapper>
			<Title>
				<Typewriter text={title} speed={128} />
			</Title>
			<List>
				{list.map((holiday, idx) => (
					<Holiday key={"holiday-" + year + idx} {...holiday} />
				))}
			</List>
		</HolidayListWrapper>
	)
}

export default HolidayList
