import Element from "../../../types/common/ElementProps"
import { SelectBase } from "./SelectBase"
import { useTranslation } from "../../../i18n/"

export interface PaletteSelectProps extends Element {
	addPalette: (group: string, palette: string) => void
	isShowing: boolean
}

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
