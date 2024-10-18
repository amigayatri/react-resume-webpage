import { HolidayWrapper } from "./Holiday.styled"
import HolidayProps from "../../../../types/HolidayProps"
import { useTranslation } from "react-i18next"
const weekend = new Set([6, 7])

const Holiday = ({ name, type, date }: HolidayProps) => {
	const weekday = date.getDay()
	const isWeekend = weekend.has(weekday)
	const { t, i18n } = useTranslation()
	return (
		<HolidayWrapper>
			<h1>{t("brazilianHolidays.element.name", { holidayName: name })}</h1>
			<h2>{t(`brazilianHolidays.types.${type}`)}</h2>
			<h2>
				{t(`brazilianHolidays.element.onWeekend.${isWeekend}`)}
				{isWeekend ? " =(" : " =)"}
			</h2>
			<h2>{date.toLocaleDateString(i18n.language, { dateStyle: "long" })}</h2>
		</HolidayWrapper>
	)
}

export default Holiday
