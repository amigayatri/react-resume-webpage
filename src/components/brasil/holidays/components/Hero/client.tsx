"use client"

import { HeroBase } from "./HeroBase.tsx"
import { useTranslation } from "../../../../../i18n/client"
import { HeroProps } from "../../types.ts"

export function Hero({ lng }: HeroProps) {
	const { t } = useTranslation(lng, "holidays")
	return <HeroBase t={t} lng={lng} />
}
