"use client"

import { FooterBase } from "./FooterBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Footer({ lng }: { lng: string }) {
	const { i18n, t } = useTranslation(lng, "common")
	return <FooterBase t={t} i18n={i18n} lng={lng} />
}
