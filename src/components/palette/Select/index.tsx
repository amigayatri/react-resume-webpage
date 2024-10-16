import {
	SelectWrapper,
	SelectPalette,
	OptionGroup,
	Option,
	PaletteWrapper,
	PaletteColor
} from "./Select.styled"
import palettesMap from "../../../constants/palettes"
import { useTranslation } from "react-i18next"
import { ChangeEvent, useState } from "react"

const Select = () => {
	const { t } = useTranslation()
	const themeGroup = palettesMap.get("theme")
	const currPalette = themeGroup !== undefined ? themeGroup.get("current") : []
	const [palette, setPalette] = useState(currPalette)
	const groups = Array.from(palettesMap.keys())
	const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		const [group, palette] = value.split("_")
		const currGroup = palettesMap.get(group)
		const curr = currGroup !== undefined ? currGroup.get(palette) : []
		setPalette(curr)
	}
	return (
		<SelectWrapper>
			<SelectPalette onChange={handleSelect}>
				{groups.map((group) => {
					const groupPalettes = Array.from(palettesMap.get(group)?.keys() || [])
					return (
						<OptionGroup
							key={"palette-group-" + group}
							label={t(`palettes.groups.${group}`)}
						>
							{groupPalettes.map((name) => (
								<Option
									key={`group-${group}-${name}`}
									value={`${group}_${name}`}
								>
									{t("palettes.option", {
										optionName: t(`palettes.names.${group}.${name}`)
									})}
								</Option>
							))}
						</OptionGroup>
					)
				})}
			</SelectPalette>
			<PaletteWrapper>
				{palette !== undefined &&
					palette.map((color) => (
						<PaletteColor
							key={"color-" + color}
							style={{ backgroundColor: color }}
						/>
					))}
			</PaletteWrapper>
		</SelectWrapper>
	)
}

export default Select
