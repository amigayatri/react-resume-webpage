import { IconListWrapper, List, Disclaimer } from "./IconList.styled"
import { iconsIds } from "../../../../constants/icons.ts"
import { getSafePaletteColors } from "../../../../lib/palettes/"
import { MulticoloredName } from "../../../common/client"
import { IconListBaseProps } from "../types.ts"
import { SectionTitle } from "../Common.styled.ts"
import { useEffect, useState } from "react"
import { Controls, Icon } from "../"
import { getIconsFromGroup, getIconsByFirstLetter } from "../../../../icons/"

const rainbowMonokai = getSafePaletteColors("rainbow", "rainbow monokai")

export const IconListBase = ({ lng, t }: IconListBaseProps) => {
	const [allIcons] = useState(iconsIds)
	const [currIcons, setCurrIcons] = useState(iconsIds)
	const [title, setTitle] = useState(t("options.all"))
	const [size, setSize] = useState(48)
	const [columns, setColumns] = useState(5)

	const handleGroupChange = (group: string) => {
		if (group === "all") {
			setCurrIcons(allIcons)
			setTitle(t("options.all"))
		} else if (group.length > 1) {
			setCurrIcons(getIconsFromGroup(group))
			setTitle(t(`options.${group}`))
		} else {
			setCurrIcons(getIconsByFirstLetter(group))
			setTitle(t(`options.letter`, { letterChar: group }))
		}
	}

	const handleSize = (newSize: number) => {
		setSize(newSize)
	}

	const getNumberOfColumns = () => {
		const listWidth = document
			.getElementById("icon-list-wrapper")
			?.getBoundingClientRect().width
		if (listWidth === undefined) return 1
		return Math.floor((listWidth - 96) / (size + 32))
	}

	useEffect(() => {
		setColumns(getNumberOfColumns())
		console.log(columns)
	}, [size])

	useEffect(() => {
		setColumns(getNumberOfColumns())
	}, [])

	return (
		<IconListWrapper>
			<SectionTitle>
				<MulticoloredName
					local="icons"
					info={{ group: "rainbow", name: "rainbow monokai" }}
					fontSize={24}
					legible
					lng={lng}
				>
					{title}
				</MulticoloredName>
			</SectionTitle>
			<Controls
				size={size}
				handleSize={handleSize}
				handleGroups={handleGroupChange}
				lng={lng}
			/>
			{currIcons.length === 0 ? (
				<Disclaimer>Sem ícones nessa categoria</Disclaimer>
			) : (
				<List id="icon-list-wrapper" $cols={columns} $size={size}>
					{currIcons.map((id, idx) => (
						<Icon
							id={id}
							key={"icon-with-id-" + id}
							color={rainbowMonokai[idx % rainbowMonokai.length]}
							t={t}
							lng={lng}
							size={size}
						/>
					))}
				</List>
			)}
		</IconListWrapper>
	)
}
