"use client"

import { HeroBase } from "./HeroBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Hero({ lng }: { lng: string }) {
	const { t } = useTranslation(lng, "home")
	return <HeroBase t={t} lng={lng} />
}
