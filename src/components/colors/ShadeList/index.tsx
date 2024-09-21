import { useTranslation } from "react-i18next"
import { Wrapper, ListWrapper } from "./ShadeList.styled"
import ShadeSubSection from "../ShadeSubSection"
import { Color } from "../../../lib/colors"
import { SectionTitle, SubHeading } from "../Common.styled"

interface PropsType {
	regenerate: () => Color[]
	updatedList: boolean
}

const ShadeList = (props: PropsType) => {
	const { t } = useTranslation()
	const list = props.regenerate()
	return (
		<Wrapper>
			<SectionTitle>{t("colors.shades.title")}</SectionTitle>
			<SubHeading>{t("colors.shades.summary")}</SubHeading>
			<ListWrapper>
				{list.map((color, idx) => (
					<ShadeSubSection key={`shade-${idx}-${color.code}`} color={color} />
				))}
			</ListWrapper>
		</Wrapper>
	)
}

export default ShadeList
