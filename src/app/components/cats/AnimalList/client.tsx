"use client"

import { AnimalListBase } from "./AnimalListBase"
import Element from "../../../types/ElementProps"
import { useTranslation } from "../../../i18n/client"

export const AnimalList = ({ lng }: Element) => {
	const { i18n, t } = useTranslation(lng, "animals")
	return <AnimalListBase t={t} i18n={i18n} lng={lng} />
}
