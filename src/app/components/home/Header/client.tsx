"use client"

import { HeaderBase } from "./HeaderBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Header({ lng }: { lng: string }) {
	const { i18n } = useTranslation(lng, "translation")
	return <HeaderBase i18n={i18n} lng={lng} />
}
