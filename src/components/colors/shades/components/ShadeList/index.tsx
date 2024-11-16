import { Wrapper, ListWrapper } from "./ShadeList.styled"
import { ShadeSubSection } from "../ShadeSubSection"
import { SectionTitle, SubHeading } from "../Common.styled"
import { useEffect, useState } from "react"
import { ShadeListProps, emptyColor } from "../types"

export const ShadeList = ({
	regenerate,
	updatedList,
	t,
	lng
}: ShadeListProps) => {
	const emptyColors: emptyColor = []
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
