import { IconListWrapper, List, Disclaimer } from "./IconList.styled"
import { MulticoloredName } from "../../../common/client"
import { IconListBaseProps } from "../types.ts"
import { SectionTitle } from "../Common.styled.ts"
import { useEffect, useState } from "react"
import { Controls, Icon, Hero } from "../"
import { useWindowSize } from "@uidotdev/usehooks"
import {
	getColorByIdx,
	getNumberOfColumns,
	getGroupInfo
} from "../functions.ts"

const startInfo = getGroupInfo("")

export const IconListBase = ({ lng, t }: IconListBaseProps) => {
	const [currIcons, setCurrIcons] = useState(startInfo.newIcons)
	const [title, setTitle] = useState(startInfo.newTitle.key)
	const [size, setSize] = useState(48)
	const [columns, setColumns] = useState(0)

	const handleGroupChange = (group: string) => {
		const { newIcons, newTitle } = getGroupInfo(group)
		setCurrIcons(newIcons)
		const { key, tOptions } = newTitle
		setTitle(t(key, tOptions))
	}

	const handleSize = (newSize: number) => {
		setSize(newSize)
		handleCols()
	}

	const windowSize = useWindowSize()

	const handleCols = () => {
		setColumns(getNumberOfColumns(windowSize, size))
	}

	useEffect(() => {
		handleCols()
	}, [windowSize.width, size])

	useEffect(() => {
		handleCols()
		handleGroupChange("all")
	}, [])

	return (
		<>
			<Hero currIcons={currIcons} lng={lng} />
			<IconListWrapper>
				<SectionTitle>
					<MulticoloredName
						local="icons"
						info={{ group: "rainbow", name: "rainbow monokai" }}
						fontSize={20}
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
								key={"icon-with-id-" + id}
								t={t}
								lng={lng}
								info={{
									id,
									size,
									color: getColorByIdx(idx)
								}}
							/>
						))}
					</List>
				)}
			</IconListWrapper>
		</>
	)
}
