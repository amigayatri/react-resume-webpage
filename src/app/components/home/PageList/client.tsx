"use client"

import Element from "../../../types/ElementProps.ts"
import { PageListBase } from "./PageListBase.tsx"
import { useTranslation } from "../../../i18n/client"

export async function PageList({ lng }: Element) {
	const { i18n } = useTranslation(lng, "home")

	return <PageListBase i18n={i18n} lng={lng} />
}
