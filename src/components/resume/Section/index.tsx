import {
	Wrapper,
	SectionTitle,
	SectionIcon,
	SectionList,
	SectionItem,
	SubitemText,
	DateWrapper
} from "./Section.styled"
import TranslatedSectionProps from "../../../types/TranslatedSectionProps"
import SVGIcon from "../../../icons/SVGIcon"

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
			<SectionTitle>
				<SectionIcon>
					<SVGIcon local="resume" size={24} id={section.icon} />
				</SectionIcon>
				{section.title}
			</SectionTitle>
			<SectionList>
				{section.items.map((item, idx) => showItem(item, idx))}
			</SectionList>
		</Wrapper>
	)
}
export default Section
