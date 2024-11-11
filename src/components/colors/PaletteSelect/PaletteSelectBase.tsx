import { ChangeEvent, useState } from "react"
import {
	Button,
	ButtonsWrapper,
	PaletteSelect,
	PaletteOption,
	PaletteGroup,
	SelectWrapper,
	Label,
	PreviewColor,
	PreviewWrapper
} from "./PaletteSelect.styled.ts"
import { TFunction } from "i18next"
import palettesMap from "../../../constants/palettes.tsx"
import { PaletteSelectProps } from "."

interface PaletteSelectBaseProps extends PaletteSelectProps {
	t: TFunction<any, undefined>
}
export const PaletteSelectBase = ({
	t,
	addPalette,
	isShowing
}: PaletteSelectBaseProps) => {
	const [selectedGroup, setSelectedGroup] = useState("theme")
	const [selectedPalette, setSelectedPalette] = useState("current")
	const [availableGroups] = useState(Array.from(palettesMap.keys()))
	const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		const [group, palette] = value.split("_")
		setSelectedGroup(group)
		setSelectedPalette(palette)
	}

	const handleAdd = () => {
		addPalette(selectedGroup, selectedPalette)
	}
	const palettePreview = () => {
		const paletteColors = palettesMap.get(selectedGroup)?.get(selectedPalette)
		if (paletteColors === undefined) return
		const preview: JSX.Element[] = []
		for (const color of paletteColors.colors) {
			preview.push(<PreviewColor style={{ backgroundColor: color }} />)
		}
		return <PreviewWrapper>{...preview}</PreviewWrapper>
	}
	return (
		<ButtonsWrapper $isShowing={isShowing}>
			<SelectWrapper>
				<Label htmlFor="color-list-palette-select">{t("select.label")}</Label>
				<PaletteSelect
					id="color-list-palette-select"
					defaultValue={0}
					onChange={handleSelect}
				>
					{availableGroups.map((group) => {
						const availablePalettes = Array.from(
							palettesMap.get(group)?.keys() || []
						)
						return (
							<PaletteGroup key={"group" + group} label={t(`groups.${group}`)}>
								{availablePalettes !== undefined &&
									availablePalettes.map((paletteName) => (
										<PaletteOption
											value={`${group}_${paletteName}`}
											key={`palette-option-${paletteName}`}
										>
											{t(`names.${group}.${paletteName}`)}
										</PaletteOption>
									))}
							</PaletteGroup>
						)
					})}
				</PaletteSelect>
				<Button onClick={handleAdd}>{t("add")}</Button>
			</SelectWrapper>
			{palettePreview()}
		</ButtonsWrapper>
	)
}
