"use client"

import { DescriptionBase } from "./DescriptionBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { DescriptionProps } from "../types"

export function Description({ lng }: DescriptionProps) {
	const { t } = useTranslation(lng, "extra-languages")
	return <DescriptionBase t={t} lng={lng} />
}
