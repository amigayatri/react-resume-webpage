import { ElementProps } from "../../../types/common/"
import { AnimalListBase } from "./AnimalListBase"
import { useTranslation } from "../../../i18n/"

export const AnimalList = async ({ lng }: ElementProps) => {
	const { t } = await useTranslation(lng, "animals")
	return <AnimalListBase t={t} lng={lng} />
}
