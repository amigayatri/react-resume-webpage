"use client"

import { HeroBase } from "./HeroBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Hero({ lng }: { lng: string }) {
	const { i18n } = useTranslation(lng, "home")
	return <HeroBase i18n={i18n} lng={lng} />
}
