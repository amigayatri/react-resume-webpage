"use client"

import Element from "../../../types/ElementProps.ts"
import { PalettesListBase } from "./PalettesListBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function PalettesList({ lng }: Element) {
	const { i18n, t } = useTranslation(lng, "palettes")
	return <PalettesListBase t={t} i18n={i18n} lng={lng} />
}
