import { Wrapper, ListWrapper, SubHeadingWrapper } from "./ColorList.styled"
import { SectionTitle, SubHeading } from "../Common.styled"
import { ColorItem } from "../ColorItem"
import { Select } from "../Select/client"
import { SimpleColor } from "../../../lib/rgb"
import { useEffect, useState } from "react"
import BaseElement from "../../../types/common/BaseElementProps"

interface ColorListProps extends BaseElement {
	regenerate: () => { color: SimpleColor; remove: (code: string) => void }[]
	colors: { size: number }
	updatedList: boolean
	addPalette: (group: string, palette: string) => void
}

export const ColorList = ({
	regenerate,
	colors,
	updatedList,
	addPalette,
	t,
	lng
}: ColorListProps) => {
	const emptyList: { color: SimpleColor; remove: (code: string) => void }[] = []
	const [list, setList] = useState(emptyList)
	useEffect(() => {
		const colorList = regenerate()
		setList(colorList)
	}, [updatedList])
	const printColor = (
		color: SimpleColor,
		remove: (code: string) => void,
		idx: number
	) => {
		return <ColorItem key={"color-list-" + idx} color={color} remove={remove} />
	}

	return (
		<Wrapper>
			<SectionTitle>{t("colorList.title")}</SectionTitle>
			<SubHeadingWrapper>
				<SubHeading>
					{colors.size == 0
						? t("colorList.summary.empty")
						: t("colorList.summary.nonEmpty")}
				</SubHeading>
				<Select
					lng={lng}
					addPalette={addPalette}
					isShowing={colors.size === 0}
				/>
			</SubHeadingWrapper>
			<ListWrapper>
				{...list.map(
					(
						obj: { color: SimpleColor; remove: (code: string) => void },
						idx: number
					) => printColor(obj.color, obj.remove, idx)
				)}
			</ListWrapper>
		</Wrapper>
	)
}
