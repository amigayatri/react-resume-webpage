import Element from "../../../types/ElementProps"
import { AnimalListBase } from "./AnimalListBase"
import { useTranslation } from "../../../i18n/"

export const AnimalList = async ({ lng }: Element) => {
	const { i18n, t } = await useTranslation(lng, "animals")
	return <AnimalListBase t={t} i18n={i18n} lng={lng} />
}
