import { Wrapper, ListWrapper } from "./ColorList.styled"
import { SectionTitle, SubHeading, SubHeadingWrapper } from "../Common.styled"
import { ColorItem } from "../ColorItem"
import { Select } from "../Select/client"
import { useEffect, useState } from "react"
import { ColorListProps, printColor, ColorItemProps } from "../types"

export const ColorList = ({
	regenerate,
	colors,
	updatedList,
	addPalette,
	titleColor,
	t,
	lng
}: ColorListProps) => {
	const emptyList: ColorItemProps[] = []
	const [list, setList] = useState(emptyList)
	useEffect(() => {
		const colorList = regenerate()
		setList(colorList)
	}, [updatedList])
	const printColor: printColor = (color, remove, idx) => {
		return <ColorItem key={"color-list-" + idx} color={color} remove={remove} />
	}

	return (
		<Wrapper>
			<SectionTitle style={{ color: titleColor }}>
				{t("colorList.title")}
			</SectionTitle>
			<SubHeadingWrapper>
				<SubHeading>
					{t(`colorList.summary.${colors.size === 0 ? "empty" : "nonEmpty"}`)}
				</SubHeading>
				<Select
					colorFunction="color"
					lng={lng}
					addPalette={addPalette}
					isShowing={colors.size === 0}
				/>
			</SubHeadingWrapper>
			<ListWrapper>
				{...list.map((obj: ColorItemProps, idx: number) =>
					printColor(obj.color, obj.remove, idx)
				)}
			</ListWrapper>
		</Wrapper>
	)
}
