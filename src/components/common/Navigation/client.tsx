"use client"

import { useTranslation } from "../../../i18n/client"
import { NavigationBase } from "./NavigationBase.tsx"
import Element from "../../../types/common/ElementProps.ts"

export const Navigation = ({ lng }: Element) => {
	const { t } = useTranslation(lng, "home")
	return <NavigationBase t={t} lng={lng} />
}
