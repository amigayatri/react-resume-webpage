"use client"

import { UsedIconsBase } from "./UsedIconsBase"
import { useTranslation } from "../../../../i18n/client"
import { UsedIconsProps } from "../../types"

export function UsedIcons({ lng }: UsedIconsProps) {
	const { t } = useTranslation(lng, "iconlist")
	return <UsedIconsBase t={t} lng={lng} />
}
