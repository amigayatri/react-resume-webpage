"use client"

import Element from "../../../types/ElementProps.ts"
import { HeroBase } from "./HeroBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Hero({ lng }: Element) {
	const { i18n, t } = useTranslation(lng, "holidays")
	return <HeroBase t={t} i18n={i18n} lng={lng} />
}
