"use client"

import Element from "../../../types/ElementProps.ts"
import { IconListBase } from "./IconListBase.tsx"
import { useTranslation } from "../../../i18n/client"

export function IconList({ lng }: Element) {
	const { i18n } = useTranslation(lng, "iconlist")
	return <IconListBase i18n={i18n} lng={lng} />
}
