"use client"

import { useTranslation } from "../../../../i18n/client"
import { SimpleAuthProps } from "../types.ts"
import { SimpleAuthBase } from "./SimpleAuthBase.tsx"

export function SimpleAuth({ lng }: SimpleAuthProps) {
	const { t } = useTranslation(lng, "iconlist")
	return <SimpleAuthBase t={t} lng={lng} />
}
