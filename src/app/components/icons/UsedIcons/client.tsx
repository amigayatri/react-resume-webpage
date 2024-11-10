"use client"

import Element from "../../../types/ElementProps.ts"
import { UsedIconsBase } from "./UsedIconsBase"
import { useTranslation } from "../../../i18n/client"

export function UsedIcons({ lng }: Element) {
	const { t } = useTranslation(lng, "iconlist")
	return <UsedIconsBase t={t} lng={lng} />
}
