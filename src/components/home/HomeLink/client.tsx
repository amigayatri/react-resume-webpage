"use client"

import { HomeLinkBase } from "./HomeLinkBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { HomeLinkProps } from "./index.tsx"

export function HomeLink({ lng, to }: HomeLinkProps) {
	const { t } = useTranslation(lng, "pagelist")
	return <HomeLinkBase t={t} to={to} lng={lng} />
}
