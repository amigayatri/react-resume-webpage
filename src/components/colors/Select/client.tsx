"use client"

import { SelectBase } from "./SelectBase"
import { PaletteSelectProps } from "."
import { useTranslation } from "../../../i18n/client"

export const Select = ({ lng, addPalette, isShowing }: PaletteSelectProps) => {
	const { t } = useTranslation(lng, "palettes")
	return (
		<SelectBase t={t} lng={lng} addPalette={addPalette} isShowing={isShowing} />
	)
}
