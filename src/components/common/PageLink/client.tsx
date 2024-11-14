"use client"

import { useTranslation } from "../../../i18n/client"
import { PageLinkProps } from "./index.tsx"
import { InternalLink, ExternalLink } from "./components/"

export function PageLink(props: PageLinkProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "pagelist")
	const { isExternal } = props.to
	if (isExternal) return <ExternalLink t={t} {...props} />
	return <InternalLink t={t} {...props} />
}
