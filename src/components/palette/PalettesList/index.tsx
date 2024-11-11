import Element from "../../../types/common/ElementProps"
import { PalettesListBase } from "./PalettesListBase"
import { useTranslation } from "../../../i18n/"

export const PalettesList = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "palettes")
	return <PalettesListBase t={t} lng={lng} />
}
