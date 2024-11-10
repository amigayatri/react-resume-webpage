"use client"

import { useTranslation } from "../../../i18n/client"
import { NavigationBase } from "./NavigationBase.tsx"
import Element from "../../../types/ElementProps.ts"

export const Navigation = ({ lng }: Element) => {
	const { i18n, t } = useTranslation(lng, "home")
	return <NavigationBase t={t} i18n={i18n} lng={lng} />
}
