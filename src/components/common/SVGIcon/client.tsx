"use client"

import { SVGIconBase } from "./SVGIconBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { SVGProps } from "./index.tsx"

export function SVGIcon(props: SVGProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "icons")
	return <SVGIconBase t={t} {...props} />
}
