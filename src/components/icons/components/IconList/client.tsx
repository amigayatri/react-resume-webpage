"use client"

import { IconListBase } from "./IconListBase.tsx"
import { useTranslation } from "../../../../i18n/client"
import { IconListProps } from "../types.ts"

export function IconList({ lng }: IconListProps) {
	const { t } = useTranslation(lng, "iconlist")
	return <IconListBase t={t} lng={lng} />
}
