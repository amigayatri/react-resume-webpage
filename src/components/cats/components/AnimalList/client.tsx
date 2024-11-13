"use client"

import { AnimalListBase } from "./AnimalListBase"
import { useTranslation } from "../../../../i18n/client"
import { AnimalListElementProps } from "../types.ts"

export const AnimalList = ({ lng }: AnimalListElementProps) => {
	const { t } = useTranslation(lng, "animals")
	return <AnimalListBase t={t} lng={lng} />
}
