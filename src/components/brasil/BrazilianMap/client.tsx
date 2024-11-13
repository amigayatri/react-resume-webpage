"use client"

import { BrazilianMapBase } from "./BrazilianMapBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { BrazilianMapProps } from "../types"

export function BrazilianMap({ lng }: BrazilianMapProps) {
	const { t } = useTranslation(lng, "brasil")
	return <BrazilianMapBase t={t} lng={lng} />
}
