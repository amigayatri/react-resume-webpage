import {
	HolidayWrapper,
	Name,
	DateSpan,
	Weekday,
	Type,
	IconWrapper,
	ContentWrapper,
	Content,
	CenterContent,
	Days
} from "./Holiday.styled"
import HolidayProps from "../../../../types/HolidayProps"
import { useTranslation } from "react-i18next"
import SVGIcon from "../../../../icons/SVGIcon"
const weekend = new Set([6, 0])
const preWeekend = new Set([1, 5])

const Holiday = ({ name, type, date }: HolidayProps) => {
	const weekday = date.getDay()
	const isWeekend = weekend.has(weekday)
	const isPreWeekend = preWeekend.has(weekday)
	const today: Date = new Date()
	const daysUntill = Math.floor(
		(date.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)
	)
	const { t, i18n } = useTranslation()
	return (
		<HolidayWrapper $isPreweekend={isPreWeekend} $isWeekend={isWeekend}>
			<Name>{name}</Name>
			<ContentWrapper>
				<IconWrapper>
					<SVGIcon
						size={48}
						id={isWeekend ? "sad" : isPreWeekend ? "superhappy" : "happy"}
					/>
					<Weekday>
						{date.toLocaleDateString(i18n.language, { weekday: "long" })}
					</Weekday>
				</IconWrapper>
				<CenterContent>
					faltam<Days>{daysUntill}</Days> dias
				</CenterContent>
				<Content>
					<Type>{t(`brazilianHolidays.types.${type}`)}</Type>
					<DateSpan>
						{date.toLocaleDateString(i18n.language, { dateStyle: "medium" })}
					</DateSpan>
				</Content>
			</ContentWrapper>
		</HolidayWrapper>
	)
}

export default Holiday
