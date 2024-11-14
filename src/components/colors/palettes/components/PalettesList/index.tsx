import { PalettesListBase } from "./PalettesListBase"
import { useTranslation } from "../../../../../i18n/"
import { PalettesListProps } from "../types"

export const PalettesList = async ({ lng }: PalettesListProps) => {
	const { t } = await useTranslation(lng, "palettes")
	return <PalettesListBase t={t} lng={lng} />
}
