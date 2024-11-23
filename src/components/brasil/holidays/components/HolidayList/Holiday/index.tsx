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
import { HolidayElementProps } from "../../../types.ts"
import { SVGIcon } from "../../../../../common/client"
import { Trans } from "react-i18next/TransWithoutContext"

//$emotionStart
// = ["sad", "superhappy", "happy"]
//$emotionEnd

const Holiday = ({
	name,
	type,
	date,
	isPreWeekend,
	isWeekend,
	daysUntill,
	t,
	lng
}: HolidayElementProps) => {
	return (
		<HolidayWrapper $isPreweekend={isPreWeekend} $isWeekend={isWeekend}>
			<Name>{name}</Name>
			<ContentWrapper>
				<IconWrapper>
					<SVGIcon
						lng={lng}
						local="holidays"
						size={48}
						id={isWeekend ? "sad" : isPreWeekend ? "superhappy" : "happy"}
					/>
					<Weekday>{date.toLocaleDateString(lng, { weekday: "long" })}</Weekday>
				</IconWrapper>
				<CenterContent>
					<Trans t={t} i18nKey="days-untill" tOptions={{ daysUntill }}>
						t<Days>l</Days>t
					</Trans>
				</CenterContent>
				<Content>
					<Type>{t(`types.${type}`)}</Type>
					<DateSpan>
						{date.toLocaleDateString(lng, { dateStyle: "medium" })}
					</DateSpan>
				</Content>
			</ContentWrapper>
		</HolidayWrapper>
	)
}

export default Holiday
