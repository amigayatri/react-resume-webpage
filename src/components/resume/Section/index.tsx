import { useTranslation } from "react-i18next"
import {
	Wrapper,
	SectionTitle,
	SectionList,
	SectionItem,
	SubitemText
} from "./Section.styled"
import SectionProps from "../../../types/SectionProps"

const Section = ({ section }: { section: SectionProps }) => {
	const { t } = useTranslation()

	const showItem = (item: string) => {
		return (
			<SectionItem key={section.name + "-" + item}>
				{t(`resume.sections.${section.name}.items.${item}.text`)}
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
			<SectionList>{section.items.map((item) => showItem(item))}</SectionList>
		</Wrapper>
	)
}
export default Section
