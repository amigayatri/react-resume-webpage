import {
	Wrapper,
	SectionTitle,
	SectionList,
	SectionItem,
	SubitemText,
	DateWrapper
} from "./Section.styled"
import TranslatedSectionProps from "../../../types/TranslatedSectionProps"

const Section = ({ section }: { section: TranslatedSectionProps }) => {
	const showItem = (item: string, idx: number) => {
		return (
			<SectionItem key={section.title + "-" + item}>
				{section.items[idx]}
				{section.dates !== undefined && (
					<DateWrapper>{section.dates[idx]}</DateWrapper>
				)}
				{section.subitems !== undefined && (
					<SubitemText>{section.subitems[idx]}</SubitemText>
				)}
			</SectionItem>
		)
	}

	return (
		<Wrapper>
			<SectionTitle>{section.title}</SectionTitle>
			<SectionList>
				{section.items.map((item, idx) => showItem(item, idx))}
			</SectionList>
		</Wrapper>
	)
}
export default Section
