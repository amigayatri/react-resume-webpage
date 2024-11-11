"use client"

import Element from "../../../types/common/ElementProps.ts"
import { PalettesListBase } from "./PalettesListBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function PalettesList({ lng }: Element) {
	const { t } = useTranslation(lng, "palettes")
	return <PalettesListBase t={t} lng={lng} />
}
