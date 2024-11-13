"use client"

import { FooterBase } from "./FooterBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { FooterProps } from "./"

export function Footer({ lng, isRTL }: FooterProps) {
	const { t } = useTranslation(lng, "footer")
	return <FooterBase isRTL={isRTL} t={t} lng={lng} />
}
