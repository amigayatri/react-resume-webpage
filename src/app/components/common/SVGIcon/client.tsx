"use client"

import { SVGIconBase } from "./SVGIconBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { SVGProps } from "./index.tsx"

export function SVGIcon(props: SVGProps) {
	const { lng } = props
	const { i18n } = useTranslation(lng, "translation")
	return <SVGIconBase i18n={i18n} {...props} />
}
