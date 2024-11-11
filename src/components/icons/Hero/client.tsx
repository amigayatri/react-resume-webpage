"use client"

import Element from "../../../types/common/ElementProps.ts"
import { HeroBase } from "./HeroBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Hero({ lng }: Element) {
	const { t } = useTranslation(lng, "iconlist")
	return <HeroBase t={t} lng={lng} />
}
