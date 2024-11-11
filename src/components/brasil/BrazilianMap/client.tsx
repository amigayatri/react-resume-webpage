"use client"

import Element from "../../../types/common/ElementProps.ts"
import { BrazilianMapBase } from "./BrazilianMapBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function BrazilianMap({ lng }: Element) {
	const { t } = useTranslation(lng, "brasil")
	return <BrazilianMapBase t={t} lng={lng} />
}
