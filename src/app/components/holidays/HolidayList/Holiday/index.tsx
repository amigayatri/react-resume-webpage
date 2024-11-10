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
import { SVGIcon } from "../../../common/SVGIcon/client"
import { TFunction } from "i18next"
import { Trans } from "react-i18next/TransWithoutContext"

interface HolidayElementProps extends HolidayProps {
	isWeekend: boolean
	isPreWeekend: boolean
	daysUntill: number
	lng: string
	t: TFunction<any, undefined>
}

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
	const cleanLng =
		lng.length > 2 ? `${lng.substring(0, 2)}-${lng.substring(2)}` : lng
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
					<Weekday>
						{date.toLocaleDateString(cleanLng, { weekday: "long" })}
					</Weekday>
				</IconWrapper>
				<CenterContent>
					<Trans t={t} i18nKey="days-untill" tOptions={{ daysUntill }}>
						t<Days>l</Days>t
					</Trans>
				</CenterContent>
				<Content>
					<Type>{t(`types.${type}`)}</Type>
					<DateSpan>
						{date.toLocaleDateString(cleanLng, { dateStyle: "medium" })}
					</DateSpan>
				</Content>
			</ContentWrapper>
		</HolidayWrapper>
	)
}

export default Holiday
