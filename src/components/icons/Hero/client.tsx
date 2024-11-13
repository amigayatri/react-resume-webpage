"use client"

import { HeroBase } from "./HeroBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { HeroProps } from "../types"

export function Hero({ lng }: HeroProps) {
	const { t } = useTranslation(lng, "iconlist")
	return <HeroBase t={t} lng={lng} />
}
