import { useTranslation } from "react-i18next"
import { Wrapper, ListWrapper } from "./Styles"
import { SectionTitle } from "../Main/Styles"
import { ShadeSubSection } from "../ShadeSubSection/ShadeSubsections"
import { Color } from "../../../lib/colors"

export const ShadeList = (props: { regenerate: () => Color[], updatedList: boolean }) => {
	const { t } = useTranslation()
    const list = props.regenerate()
	return (
		<Wrapper>
			<SectionTitle>{t("colors.shades.title")}</SectionTitle>
            <ListWrapper>
                {list.map((color) => <ShadeSubSection color={color}/>)}
            </ListWrapper>
        </Wrapper>
	)
}
