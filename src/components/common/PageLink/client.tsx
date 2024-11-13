"use client"

import { useTranslation } from "../../../i18n/client"
import { PageLinkProps } from "./index.tsx"
import { InternalLink, ExternalLink } from "./components/"

export function PageLink({ lng, to }: PageLinkProps) {
	const { t } = useTranslation(lng, "pagelist")
	const { isExternal } = to
	if (isExternal) return <ExternalLink t={t} to={to} lng={lng} />
	return <InternalLink t={t} to={to} lng={lng} />
}
