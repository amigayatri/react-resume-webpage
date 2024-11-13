import {
	Wrapper,
	SectionTitle,
	SectionIcon,
	SectionList,
	SectionItem,
	SubitemText,
	DateWrapper
} from "./Section.styled"
import { SVGIcon } from "../../common/"
import { SectionElementProps } from "../types.ts"

export const Section = ({ section, lng }: SectionElementProps) => {
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