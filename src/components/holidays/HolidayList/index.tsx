import HolidayProps from "../../../types/HolidayProps"
import { HolidayListWrapper, List, Title } from "./HolidayList.styled"
import Holiday from "./Holiday"
import { useTranslation } from "react-i18next"

interface HolidayListProps {
	list: HolidayProps[]
}

const HolidayList = ({ list }: HolidayListProps) => {
	const { t } = useTranslation()
	return (
		<HolidayListWrapper>
			<Title>{t("brazilianHolidays.list.title")}</Title>
			<List>
				{list.map((holiday) => (
					<Holiday {...holiday} />
				))}
			</List>
		</HolidayListWrapper>
	)
}

export default HolidayList
