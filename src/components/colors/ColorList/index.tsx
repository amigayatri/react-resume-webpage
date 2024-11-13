import { Wrapper, ListWrapper, SubHeadingWrapper } from "./ColorList.styled"
import { SectionTitle, SubHeading } from "../Common.styled"
import { ColorItem } from "../ColorItem"
import { Select } from "../Select/client"
import { useEffect, useState } from "react"
import { ColorListProps, printColorType, ColorItemProps } from "../types"

export const ColorList = ({
	regenerate,
	colors,
	updatedList,
	addPalette,
	t,
	lng
}: ColorListProps) => {
	const emptyList: ColorItemProps[] = []
	const [list, setList] = useState(emptyList)
	useEffect(() => {
		const colorList = regenerate()
		setList(colorList)
	}, [updatedList])
	const printColor: printColorType = (color, remove, idx) => {
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
				{...list.map((obj: ColorItemProps, idx: number) =>
					printColor(obj.color, obj.remove, idx)
				)}
			</ListWrapper>
		</Wrapper>
	)
}
