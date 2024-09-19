import { useTranslation } from "react-i18next"
import { Wrapper, ListWrapper } from "./Styles"
import { SectionTitle, SubHeading } from "../Main/Styles"
import { ColorItem } from "../ColorItem/ColorItem"
import { SimpleColor } from "../../../lib/rgb"


export const ColorList = (props: { regenerate: () => {color: SimpleColor, remove: (code: string) => void}[], colors: { size: number }, updatedList: boolean }) => {
	const { t } = useTranslation()
    const list = props.regenerate()
    const printColor = (color: SimpleColor, remove: (code: string) => void, idx: number) => {
        return <ColorItem key={'color-list-'+idx} color={color} remove={remove}/>
    }
	return (
		<Wrapper>
			<SectionTitle>{t("colors.colorList.title")}</SectionTitle>
			<SubHeading>{props.colors.size == 0? t("colors.colorList.summary.empty") : t("colors.colorList.summary.nonEmpty")}</SubHeading>
            <ListWrapper>
                {...list.map((obj: {color: SimpleColor, remove: (code: string) => void}, idx: number) => printColor(obj.color, obj.remove, idx))}
            </ListWrapper>
        </Wrapper>
	)
}
