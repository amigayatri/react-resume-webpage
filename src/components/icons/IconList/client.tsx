"use client"

import Element from "../../../types/common/ElementProps.ts"
import { IconListBase } from "./IconListBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function IconList({ lng }: Element) {
	const { t } = useTranslation(lng, "iconlist")
	return <IconListBase t={t} lng={lng} />
}
