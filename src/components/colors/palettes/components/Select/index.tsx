import { SelectSectionWrapper, SelectWrapper } from "./Select.styled"
import { isGroup, isPaletteName, getNames } from "../../../../../lib/palettes"
import { Subtitle, Summary } from "../Common.styled"
import { PaletteSelect } from "../../../../common/client"
import { SelectProps } from "../types"
import { onSelectChange } from "../../../../../types/common"

export const Select = ({ add, showing, t, lng }: SelectProps) => {
	const handleSelect: onSelectChange = ({ target }) => {
		const { value } = target
		const [group, palette] = value.split("_")
		if (palette === undefined) {
			const [_, groupName] = value.split("#")
			if (!isGroup(groupName)) return
			const names = getNames(groupName)
			for (const paletteName of names) {
				add(groupName, paletteName)
			}
		} else {
			if (!isGroup(group) || !isPaletteName(palette)) return
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
