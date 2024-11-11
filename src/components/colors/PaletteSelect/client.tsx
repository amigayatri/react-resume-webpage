"use client"

import { PaletteSelectBase } from "./PaletteSelectBase"
import { PaletteSelectProps } from "."
import { useTranslation } from "../../../i18n/client"

export const PaletteSelect = ({
	lng,
	addPalette,
	isShowing
}: PaletteSelectProps) => {
	const { t } = useTranslation(lng, "palettes")
	return (
		<PaletteSelectBase
			t={t}
			lng={lng}
			addPalette={addPalette}
			isShowing={isShowing}
		/>
	)
}
