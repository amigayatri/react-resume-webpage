import { SelectSectionWrapper, SelectWrapper } from "./Select.styled"
import palettesMap from "../../../../../constants/palettes"
import { ChangeEvent } from "react"
import { Subtitle, Summary } from "../Common.styled"
import { PaletteSelect } from "../../../../common/client"
import { SelectProps } from "../types"

export const Select = ({ add, showing, t, lng }: SelectProps) => {
	const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		const [group, palette] = value.split("_")
		if (palette === undefined) {
			const [_, groupName] = value.split("#")
			const groupPalettes = palettesMap.get(groupName)
			const names =
				groupPalettes === undefined ? [] : Array.from(groupPalettes.keys())
			for (const paletteName of names) {
				add(groupName, paletteName)
			}
		} else {
			add(group, palette)
		}
	}
	return (
		<SelectSectionWrapper>
			<Subtitle>{t("addOne.title")}</Subtitle>
			<Summary>{t("addOne.summary")}</Summary>
			<SelectWrapper>
				<PaletteSelect
					local="palettes"
					fontSize={1.5}
					label={{ palette: t("select.label") }}
					addMultiple
					type="hide-showing"
					showing={showing}
					onSelect={handleSelect}
					lng={lng}
				/>
			</SelectWrapper>
		</SelectSectionWrapper>
	)
}
