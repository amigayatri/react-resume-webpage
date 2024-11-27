"use client"

import { SVGIconBase } from "./SVGIconBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { SVGElProps } from "../../../types/common/"

export function SVGIcon(props: SVGElProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "icons")
	return <SVGIconBase t={t} {...props} />
}
