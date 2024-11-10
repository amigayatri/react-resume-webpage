"use client"

import Element from "../../../types/ElementProps.ts"
import { BrazilianMapBase } from "./BrazilianMapBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function BrazilianMap({ lng }: Element) {
	const { i18n, t } = useTranslation(lng, "brasil")
	return <BrazilianMapBase t={t} i18n={i18n} lng={lng} />
}
