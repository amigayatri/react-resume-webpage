import { useTranslation } from "react-i18next"
import { Wrapper, SubHeading, ListWrapper } from "./Styles"
import { SectionTitle } from "../Main/Styles"
import { MonokaiTheme } from "../../Themes/colors/Monokai"
import { ColorItem } from "../ColorItem/ColorItem"

const colorOptions = Object.values(MonokaiTheme.colors.base)

export const ColorList = (props: { regenerate: () => {remove: (code: string) => void, code: string}[], colors: { size: number }, updatedList: boolean }) => {
	const { t } = useTranslation()
    const list = props.regenerate()
    const printColor = (remove: (code: string) => void, code: string , idx: number) => {
        const tagIdx = idx % colorOptions.length
        return <ColorItem remove={remove} code={code} tagColor={colorOptions[tagIdx]}/>
    }
	return (
		<Wrapper>
			<SectionTitle>{t("colors.colorList.title")}</SectionTitle>
			<SubHeading>{props.colors.size == 0? t("colors.colorList.summary.empty") : t("colors.colorList.summary.nonEmpty")}</SubHeading>
            <ListWrapper>
                {...list.map((obj: {remove: (code: string) => void, code: string}, idx: number) => printColor(obj.remove, obj.code, idx))}
            </ListWrapper>
        </Wrapper>
	)
}
