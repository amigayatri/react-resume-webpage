import Element from "../../../types/common/ElementProps"
import { AnimalListBase } from "./AnimalListBase"
import { useTranslation } from "../../../i18n/"

export const AnimalList = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "animals")
	return <AnimalListBase t={t} lng={lng} />
}
