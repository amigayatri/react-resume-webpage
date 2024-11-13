"use client"

import { useTranslation } from "../../../i18n/client"
import { NavigationBase } from "./NavigationBase.tsx"
import { ElementProps } from "../../../types/common/"

export const Navigation = ({ lng }: ElementProps) => {
	const { t } = useTranslation(lng, "pagelist")
	return <NavigationBase t={t} lng={lng} />
}
