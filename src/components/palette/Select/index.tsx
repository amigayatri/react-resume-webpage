import {
	SelectWrapper,
	SelectPalette,
	OptionGroup,
	Option
} from "./Select.styled"
import palettesMap from "../../../constants/palettes"
import { useTranslation } from "react-i18next"
import { ChangeEvent } from "react"
import { Subtitle, Summary } from "../Common.styled"

interface SelectProps {
	add: (group: string, name: string) => void
}

const Select = ({ add }: SelectProps) => {
	const { t } = useTranslation()
	const groups = Array.from(palettesMap.keys())
	const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		const [group, palette] = value.split("_")
		if (palette === undefined) {
			const [_, groupName] = value.split("#")
			const groupPalettes = palettesMap.get(groupName)
			const names =
				groupPalettes === undefined ? [] : Array.from(groupPalettes.keys())
			for (const palette of names) {
				add(groupName, palette)
			}
		} else {
			add(group, palette)
		}
	}
	return (
		<SelectWrapper>
			<Subtitle>{t("palettes.addOne.title")}</Subtitle>
			<Summary>{t("palettes.addOne.summary")}</Summary>
			<SelectPalette onChange={handleSelect}>
				<option value={""} disabled selected></option>
				{groups.map((group) => {
					const groupPalettes = Array.from(palettesMap.get(group)?.keys() || [])
					const ids = []
					const groupName = t(`palettes.groups.${group}`)
					return (
						<OptionGroup key={"palette-group-" + group} label={groupName}>
							<Option value={"#" + group}>
								{t("palettes.addGroup", { groupName })}
							</Option>
							{groupPalettes.map((name) => {
								ids.push(`${group}_${name}`)
								return (
									<Option
										key={`group-${group}-${name}`}
										value={`${group}_${name}`}
									>
										{t("palettes.option", {
											optionName: t(`palettes.names.${group}.${name}`)
										})}
									</Option>
								)
							})}
						</OptionGroup>
					)
				})}
			</SelectPalette>
		</SelectWrapper>
	)
}

export default Select
