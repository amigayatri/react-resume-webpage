import { SelectBase } from "./SelectBase"
import { useTranslation } from "../../../../../i18n/"
import { PaletteSelectProps } from "../types"

export const Select = async (props: PaletteSelectProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "shades")
	return <SelectBase t={t} {...props} />
}
