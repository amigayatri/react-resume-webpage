"use client"

import { HeroBase } from "./HeroBase.tsx"
import { useTranslation } from "../../../../i18n/client"
import { HeroProps } from "../types.ts"

export function Hero(props: HeroProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "iconlist")
	return <HeroBase t={t} {...props} />
}
