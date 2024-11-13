"use client"

import { ShadeGeneratorBase } from "./ShadeGeneratorBase"
import { useTranslation } from "../../../i18n/client"
import { ShadeGeneratorProps } from "../types"

export const ShadeGenerator = ({ lng }: ShadeGeneratorProps) => {
	const { t } = useTranslation(lng, "colors")
	return <ShadeGeneratorBase t={t} lng={lng} />
}
