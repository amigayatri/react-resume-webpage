import Element from "../../../types/ElementProps"
import { DescriptionBase } from "./DescriptionBase"
import { useTranslation } from "../../../i18n/"

export const Description = async ({ lng }: Element) => {
	const { i18n, t } = await useTranslation(lng, "extra-languages")
	return <DescriptionBase t={t} i18n={i18n} lng={lng} />
}
