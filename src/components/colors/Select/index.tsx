import { SelectBase } from "./SelectBase"
import { useTranslation } from "../../../i18n/"
import { PaletteSelectProps } from "../types"

export const Select = async ({
	lng,
	addPalette,
	isShowing
}: PaletteSelectProps) => {
	const { t } = await useTranslation(lng, "palettes")
	return (
		<SelectBase t={t} lng={lng} addPalette={addPalette} isShowing={isShowing} />
	)
}
