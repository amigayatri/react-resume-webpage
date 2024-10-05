import { useTranslation } from "react-i18next"
import {
	Wrapper,
	SectionTitle,
	SectionList,
	SectionItem,
	SubitemText,
	DateWrapper
} from "./Section.styled"
import SectionProps from "../../../types/SectionProps"

const Section = ({ section }: { section: SectionProps }) => {
	const { t, i18n } = useTranslation()
	const formatDate = (date: Date | undefined | string) => {
		if (date === undefined) {
			return ""
		} else if (typeof date === "string") {
			const now = t(`resume.dates.${date}`)
			return now[0].toUpperCase() + now.substring(1)
		} else {
			const dateStr = date.toLocaleDateString(i18n.language, {
				month: "long",
				year: "numeric"
			})
			const capitalizedDateStr =
				dateStr[0].toLocaleUpperCase(i18n.language) + dateStr.substring(1)
			return capitalizedDateStr
		}
	}
	const showDates = (idx: number) => {
		if (section.dates === undefined) return ""
		const start = formatDate(section.dates[idx].start)
		const end = formatDate(section.dates[idx].end)
		return (
			<DateWrapper>
				{` (${start}`}
				{end !== "" && `,  ${end}`})
			</DateWrapper>
		)
	}
	const showItem = (item: string, idx: number) => {
		return (
			<SectionItem key={section.name + "-" + item}>
				{t(`resume.sections.${section.name}.items.${item}.text`)}
				{section.dates && showDates(idx)}
				{section.subitem && (
					<SubitemText>
						{t(`resume.sections.${section.name}.items.${item}.subitem`)}
					</SubitemText>
				)}
			</SectionItem>
		)
	}

	return (
		<Wrapper>
			<SectionTitle>{t(`resume.sections.${section.name}.title`)}</SectionTitle>
			<SectionList>
				{section.items.map((item, idx) => showItem(item, idx))}
			</SectionList>
		</Wrapper>
	)
}
export default Section
