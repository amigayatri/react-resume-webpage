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

interface HolidayElementProps extends HolidayProps {
	isWeekend: boolean
	isPreWeekend: boolean
	daysUntill: number
}

const Holiday = ({
	name,
	type,
	date,
	isPreWeekend,
	isWeekend,
	daysUntill
}: HolidayElementProps) => {
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
