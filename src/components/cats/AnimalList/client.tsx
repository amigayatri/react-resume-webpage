"use client"

import { AnimalListBase } from "./AnimalListBase"
import Element from "../../../types/common/ElementProps"
import { useTranslation } from "../../../i18n/client"

export const AnimalList = ({ lng }: Element) => {
	const { t } = useTranslation(lng, "animals")
	return <AnimalListBase t={t} lng={lng} />
}
