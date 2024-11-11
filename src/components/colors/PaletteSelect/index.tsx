import Element from "../../../types/common/ElementProps"
import { PaletteSelectBase } from "./PaletteSelectBase"
import { useTranslation } from "../../../i18n/"

export interface PaletteSelectProps extends Element {
	addPalette: (group: string, palette: string) => void
	isShowing: boolean
}

export const PaletteSelect = async ({
	lng,
	addPalette,
	isShowing
}: PaletteSelectProps) => {
	const { t } = await useTranslation(lng, "palettes")
	return (
		<PaletteSelectBase
			t={t}
			lng={lng}
			addPalette={addPalette}
			isShowing={isShowing}
		/>
	)
}
