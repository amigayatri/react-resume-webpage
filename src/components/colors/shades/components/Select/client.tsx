"use client"

import { SelectBase } from "./SelectBase"
import { PaletteSelectProps } from "../types"
import { useTranslation } from "../../../../../i18n/client"

export const Select = (props: PaletteSelectProps) => {
	const { lng } = props
	const { t } = useTranslation(lng, "shades")
	return <SelectBase t={t} {...props} />
}
