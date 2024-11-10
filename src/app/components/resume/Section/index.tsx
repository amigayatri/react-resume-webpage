import {
	Wrapper,
	SectionTitle,
	SectionIcon,
	SectionList,
	SectionItem,
	SubitemText,
	DateWrapper
} from "./Section.styled"
import TranslatedSectionProps from "../../../types/TranslatedSectionProps.ts"
import { SVGIcon } from "../../common/SVGIcon/client.tsx"

interface SectionProps {
	lng: string
	section: TranslatedSectionProps
}

const Section = ({ section, lng }: SectionProps) => {
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
					<SVGIcon lng={lng} local="resume" size={24} id={section.icon} />
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
