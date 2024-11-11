"use client"

import { FooterBase } from "./FooterBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Footer({ lng }: { lng: string }) {
	const { t } = useTranslation(lng, "common")
	return <FooterBase t={t} lng={lng} />
}
