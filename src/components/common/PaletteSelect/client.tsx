"use client"

import { useTranslation } from "../../../i18n/client"
import { PaletteSelectBase } from "./PaletteSelectBase"
import { PaletteSelectProps } from "./types.ts"

export const PaletteSelect = (props: PaletteSelectProps) => {
	const { lng } = props
	const { t } = useTranslation(lng, "palette")
	return <PaletteSelectBase t={t} {...props} />
}
