"use client"

import { PalettesListBase } from "./PalettesListBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { PalettesListProps } from "../types"

export function PalettesList({ lng }: PalettesListProps) {
	const { t } = useTranslation(lng, "palettes")
	return <PalettesListBase t={t} lng={lng} />
}
