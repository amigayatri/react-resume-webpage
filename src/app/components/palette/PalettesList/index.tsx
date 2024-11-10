import Element from "../../../types/ElementProps"
import { PalettesListBase } from "./PalettesListBase"
import { useTranslation } from "../../../i18n/"

export const PalettesList = async ({ lng }: Element) => {
	const { i18n, t } = await useTranslation(lng, "palettes")
	return <PalettesListBase t={t} i18n={i18n} lng={lng} />
}
