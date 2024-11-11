"use client"

import Element from "../../../types/common/ElementProps.ts"
import { DescriptionBase } from "./DescriptionBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function Description({ lng }: Element) {
	const { t } = useTranslation(lng, "extra-languages")
	return <DescriptionBase t={t} lng={lng} />
}
