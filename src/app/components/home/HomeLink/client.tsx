"use client"

import { HomeLinkBase } from "./HomeLinkBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { HomeLinkProps } from "./index.tsx"

export function HomeLink({ lng, to }: HomeLinkProps) {
	const { i18n } = useTranslation(lng, "home")
	return <HomeLinkBase to={to} i18n={i18n} lng={lng} />
}
