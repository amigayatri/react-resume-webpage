import { Wrapper, ListWrapper } from "./ShadeList.styled"
import { ShadeSubSection } from "../ShadeSubSection"
import { Color } from "../../../lib/colors"
import { SectionTitle, SubHeading } from "../Common.styled"
import { useEffect, useState } from "react"
import BaseElement from "../../../types/common/BaseElementProps"
interface ShadeListProps extends BaseElement {
	regenerate: () => Color[]
	updatedList: boolean
}

export const ShadeList = ({
	regenerate,
	updatedList,
	t,
	lng
}: ShadeListProps) => {
	const emptyColors: Color[] = []
	const [list, setList] = useState(emptyColors)
	useEffect(() => {
		const currList = regenerate()
		setList(currList)
	}, [updatedList])
	return (
		<Wrapper>
			<SectionTitle>{t("shades.title")}</SectionTitle>
			<SubHeading>{t("shades.summary")}</SubHeading>
			<ListWrapper>
				{list.map((color, idx) => (
					<ShadeSubSection
						t={t}
						lng={lng}
						key={`shade-${idx}-${color.code}`}
						color={color}
					/>
				))}
			</ListWrapper>
		</Wrapper>
	)
}
