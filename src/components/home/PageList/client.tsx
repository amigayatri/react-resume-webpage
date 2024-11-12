"use client"

import Element from "../../../types/common/ElementProps.ts"
import { PageListBase } from "./PageListBase.tsx"
import { useTranslation } from "../../../i18n/client"

export async function PageList({ lng }: Element) {
	const { t } = useTranslation(lng, "pagelist")

	return <PageListBase t={t} lng={lng} />
}
