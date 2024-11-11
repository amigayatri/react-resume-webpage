"use client"

import { ShadeGeneratorBase } from "./ShadeGeneratorBase"
import Element from "../../../types/common/ElementProps"
import { useTranslation } from "../../../i18n/client"

export const ShadeGenerator = ({ lng }: Element) => {
	const { t } = useTranslation(lng, "colors")
	return <ShadeGeneratorBase t={t} lng={lng} />
}
