"use client"

import { UsedIconsBase } from "./UsedIconsBase"
import { useTranslation } from "../../../../i18n/client"
import { UsedIconsProps } from "../types"

export function UsedIcons(props: UsedIconsProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "iconlist")
	return <UsedIconsBase t={t} {...props} />
}
