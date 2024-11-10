"use client"

import Element from "../../../types/ElementProps.ts"
import { DescriptionBase } from "./DescriptionBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Description({ lng }: Element) {
	const { i18n, t } = useTranslation(lng, "extra-languages")
	return <DescriptionBase t={t} i18n={i18n} lng={lng} />
}
