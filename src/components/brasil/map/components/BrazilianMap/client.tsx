"use client"

import { BrazilianMapBase } from "./BrazilianMapBase.tsx"
import { useTranslation } from "../../../../../i18n/client"
import { BrazilianMapProps } from "../types.ts"

export function BrazilianMap({ lng }: BrazilianMapProps) {
	const { t } = useTranslation(lng, "map")
	return <BrazilianMapBase t={t} lng={lng} />
}
