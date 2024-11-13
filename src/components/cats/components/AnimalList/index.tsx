import { AnimalListBase } from "./AnimalListBase"
import { useTranslation } from "../../../../i18n/"
import { AnimalListElementProps } from "../types.ts"

export const AnimalList = async ({ lng }: AnimalListElementProps) => {
	const { t } = await useTranslation(lng, "animals")
	return <AnimalListBase t={t} lng={lng} />
}
