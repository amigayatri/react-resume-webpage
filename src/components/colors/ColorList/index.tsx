import { useTranslation } from "react-i18next"
import {
	Wrapper,
	ListWrapper,
	Button,
	ButtonsWrapper,
	PaletteSelect,
	PaletteOption,
	PaletteGroup,
	SubHeadingWrapper,
	PreviewWrapper,
	PreviewColor
} from "./ColorList.styled"
import { SectionTitle, SubHeading } from "../Common.styled"
import ColorItem from "../ColorItem"
import { SimpleColor } from "../../../lib/rgb"
import { ChangeEvent, useEffect, useState } from "react"
import palettesMap from "../../../constants/palettes"

interface ColorListProps {
	regenerate: () => { color: SimpleColor; remove: (code: string) => void }[]
	colors: { size: number }
	updatedList: boolean
	addPalette: (group: string, palette: string) => void
}

const ColorList = ({
	regenerate,
	colors,
	updatedList,
	addPalette
}: ColorListProps) => {
	const { t } = useTranslation()
	const emptyList: { color: SimpleColor; remove: (code: string) => void }[] = []
	const [list, setList] = useState(emptyList)
	const [selectedGroup, setSelectedGroup] = useState("theme")
	const [selectedPalette, setSelectedPalette] = useState("current")
	const emptyArr: string[] = []
	const [availableGroups, setAvailableGroups] = useState(emptyArr)
	useEffect(() => {
		const groups = Array.from(palettesMap.keys())
		setAvailableGroups(groups)
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

	const palettePreview = () => {
		const paletteColors = palettesMap.get(selectedGroup)?.get(selectedPalette)
		if (paletteColors === undefined) return
		const preview: JSX.Element[] = []
		for (const color of paletteColors) {
			preview.push(<PreviewColor style={{ backgroundColor: color }} />)
		}
		return <PreviewWrapper>{...preview}</PreviewWrapper>
	}

	const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		const [group, palette] = value.split("_")
		setSelectedGroup(group)
		setSelectedPalette(palette)
	}

	const handleAdd = () => {
		addPalette(selectedGroup, selectedPalette)
	}

	const showPaletteSelect = () => {
		return (
			<ButtonsWrapper $isShowing={colors.size === 0}>
				<PaletteSelect defaultValue={0} onChange={handleSelect}>
					{availableGroups.map((group) => {
						const availablePalettes = Array.from(
							palettesMap.get(group)?.keys() || []
						)
						return (
							<PaletteGroup
								key={"group" + group}
								label={t(`palettes.groups.${group}`)}
							>
								{availablePalettes !== undefined &&
									availablePalettes.map((paletteName) => (
										<PaletteOption
											value={`${group}_${paletteName}`}
											key={`palette-option-${paletteName}`}
										>
											{t("palettes.option", {
												optionName: t(`palettes.names.${group}.${paletteName}`)
											})}
										</PaletteOption>
									))}
							</PaletteGroup>
						)
					})}
				</PaletteSelect>
				<Button onClick={handleAdd}>{t("palettes.add")}</Button>
				{palettePreview()}
			</ButtonsWrapper>
		)
	}
	return (
		<Wrapper>
			<SectionTitle>{t("colors.colorList.title")}</SectionTitle>
			<SubHeadingWrapper>
				<SubHeading>
					{colors.size == 0
						? t("colors.colorList.summary.empty")
						: t("colors.colorList.summary.nonEmpty")}
				</SubHeading>
				{showPaletteSelect()}
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

export default ColorList
