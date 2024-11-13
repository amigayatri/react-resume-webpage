"use client"

import { PageListBase } from "./PageListBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { PageListElementProps } from "./"

export function PageList(props: PageListElementProps) {
	const { lng, namespace } = props
	const { t } = useTranslation(lng, namespace)
	return <PageListBase t={t} {...props} />
}
