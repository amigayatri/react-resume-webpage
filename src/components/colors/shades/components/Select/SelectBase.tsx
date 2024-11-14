import { ChangeEvent, useState } from "react"
import {
	Button,
	ButtonsWrapper,
	SelectWrapper,
	PreviewColor,
	PreviewWrapper
} from "./Select.styled.ts"
import { palettesMap } from "../../../../../constants/palettes/"
import { PaletteSelect } from "../../../../common/client.tsx"
import { useTheme } from "styled-components"
import { PaletteSelectBaseProps } from "../types"

export const SelectBase = ({
	addPalette,
	isShowing,
	t,
	lng
}: PaletteSelectBaseProps) => {
	const theme = useTheme()
	const [selectedGroup, setSelectedGroup] = useState("theme")
	const [selectedPalette, setSelectedPalette] = useState("current")
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
	const selectStyle = {
		label: { bg: theme.primary, text: theme.background },
		select: {
			bg: theme.background,
			text: theme.primary,
			border: theme.primary
		}
	}
	return (
		<ButtonsWrapper $isShowing={isShowing}>
			<SelectWrapper>
				<PaletteSelect
					customStyle={selectStyle}
					local="palettes"
					fontSize={1.25}
					defaultValue={{ group: selectedGroup, name: selectedPalette }}
					label={{ palette: t("select.label") }}
					type="plain"
					onSelect={handleSelect}
					lng={lng}
					Button={<Button onClick={handleAdd}>{t("add")}</Button>}
				/>
			</SelectWrapper>
			{palettePreview()}
		</ButtonsWrapper>
	)
}
