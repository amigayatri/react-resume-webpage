import { useTranslation } from "react-i18next"
import { Wrapper, ListWrapper } from "./Styles"
import { SectionTitle, SubHeading } from "../Main/Styles"
import { ShadeSubSection } from "../ShadeSubSection/ShadeSubsections"
import { Color } from "../../../lib/colors"

export const ShadeList = (props: { regenerate: () => Color[], updatedList: boolean }) => {
	const { t } = useTranslation()
    const list = props.regenerate()
	return (
		<Wrapper>
			<SectionTitle>{t("colors.shades.title")}</SectionTitle>
            <SubHeading>{t("colors.shades.summary")}</SubHeading>
            <ListWrapper>
                {list.map((color, idx) => <ShadeSubSection key={`shade-${idx}-${color.code}`} color={color}/>)}
            </ListWrapper>
        </Wrapper>
	)
}
