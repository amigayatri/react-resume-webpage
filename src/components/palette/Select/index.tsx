import Element from "../../../types/common/ElementProps"
import {
	SelectWrapper,
	SelectPalette,
	OptionGroup,
	Option,
	Label,
	SelectSectionWrapper
} from "./Select.styled"
import palettesMap from "../../../constants/palettes"
import { ChangeEvent } from "react"
import { Subtitle, Summary } from "../Common.styled"
import { TFunction } from "i18next"

interface SelectProps extends Element {
	showing: Map<string, Set<string>>
	add: (group: string, name: string) => void
	t: TFunction<any, undefined>
}

const Select = ({ add, showing, t }: SelectProps) => {
	const groups = Array.from(palettesMap.keys())
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
				<Label htmlFor="palette-page-select">{t("select.label")}</Label>
				<SelectPalette
					defaultValue={"_"}
					id="palette-page-select"
					onChange={handleSelect}
				>
					<option value={"_"}></option>
					{groups.map((group) => {
						const groupPalettes = Array.from(
							palettesMap.get(group)?.keys() || []
						)
						const groupName = t(`groups.${group}`)
						const showingFromGroup = showing.get(group) || new Set()
						if (showingFromGroup.size === groupPalettes.length) return
						return (
							<OptionGroup key={"palette-group-" + group} label={groupName}>
								<Option value={"#" + group}>
									{t("addGroup", { groupName })}
								</Option>
								{groupPalettes.map((name) => {
									if (showingFromGroup.has(name)) return
									return (
										<Option
											key={`group-${group}-${name}`}
											value={`${group}_${name}`}
										>
											{t(`names.${group}.${name}`)}
										</Option>
									)
								})}
							</OptionGroup>
						)
					})}
				</SelectPalette>
			</SelectWrapper>
		</SelectSectionWrapper>
	)
}

export default Select
