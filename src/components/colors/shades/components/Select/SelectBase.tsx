import { useState } from "react"
import {
	Button,
	ButtonsWrapper,
	SelectWrapper,
	PreviewColor,
	PreviewWrapper
} from "./Select.styled.ts"
import {
	getPalette,
	isGroup,
	isPaletteName
} from "../../../../../lib/palettes/"
import { PaletteSelect } from "../../../../common/client.tsx"
import { useTheme } from "styled-components"
import { PaletteSelectBaseProps } from "../types"
import { onSelectChange } from "../../../../../types/common/"
import { PaletteInfoProps } from "../../../../../types/palette"

const prevSelected: PaletteInfoProps = {
	group: "theme",
	name: "current"
}

export const SelectBase = ({
	addPalette,
	isShowing,
	colorFunction,
	t,
	lng
}: PaletteSelectBaseProps) => {
	const keyPrefix = "select"
	const theme = useTheme()
	const [selectedGroup, setSelectedGroup] = useState(prevSelected.group)
	const [selectedPalette, setSelectedPalette] = useState(prevSelected.name)
	const handleSelect: onSelectChange = ({ target }) => {
		const { value } = target
		const [group, palette] = value.split("_")
		if (!isGroup(group) || !isPaletteName(palette)) return
		setSelectedGroup(group)
		setSelectedPalette(palette)
	}

	const handleAdd = () => {
		addPalette(selectedGroup, selectedPalette)
	}
	const palettePreview = () => {
		const currPalette = getPalette(selectedGroup, selectedPalette)
		if (currPalette === undefined) return
		const preview: JSX.Element[] = []
		for (const color of currPalette.colors) {
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
					defaultValue={{ group: selectedGroup, palette: selectedPalette }}
					label={{
						palette: t(`${keyPrefix}.label`, {
							colorFunction: t(`${keyPrefix}.as.${colorFunction}`)
						})
					}}
					type="plain"
					onSelect={handleSelect}
					lng={lng}
					Button={<Button onClick={handleAdd}>{t(`${keyPrefix}.add`)}</Button>}
				/>
			</SelectWrapper>
			{palettePreview()}
		</ButtonsWrapper>
	)
}
