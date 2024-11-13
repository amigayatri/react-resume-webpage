"use client"

import { AnimalListBase } from "./AnimalListBase"
import { ElementProps } from "../../../types/common/"
import { useTranslation } from "../../../i18n/client"

export const AnimalList = ({ lng }: ElementProps) => {
	const { t } = useTranslation(lng, "animals")
	return <AnimalListBase t={t} lng={lng} />
}
