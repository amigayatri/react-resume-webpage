"use client"

import { IconAltBase } from "./IconAltBase.tsx"
import { useTranslation } from "../../../../../i18n/client"
import { IconAltProps } from "../../types"

export function IconAlt({ lng, iconId }: IconAltProps) {
	const { t } = useTranslation(lng, "icons")
	return <IconAltBase t={t} lng={lng} iconId={iconId} />
}
