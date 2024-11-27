"use client"

import { DetailedIconBase } from "./DetailedIconBase.tsx"
import { useTranslation } from "../../../../i18n/client"
import { DetailedIconProps } from "../types"

export function DetailedIcon({ lng, iconId }: DetailedIconProps) {
	const { t } = useTranslation(lng, "detailed-icon")
	return <DetailedIconBase t={t} lng={lng} iconId={iconId} />
}
