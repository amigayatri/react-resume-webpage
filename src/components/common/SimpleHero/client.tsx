"use client"

import { SimpleHeroBase } from "./SimpleHeroBase"
import { useTranslation } from "../../../i18n/client"
import { SimpleHeroElementProps } from "./"

export function SimpleHero(props: SimpleHeroElementProps) {
	const { lng, namespace } = props
	const { t } = useTranslation(lng, namespace)
	return <SimpleHeroBase t={t} {...props} />
}
