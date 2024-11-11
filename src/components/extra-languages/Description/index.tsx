import Element from "../../../types/common/ElementProps"
import { DescriptionBase } from "./DescriptionBase"
import { useTranslation } from "../../../i18n/"

export const Description = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "extra-languages")
	return <DescriptionBase t={t} lng={lng} />
}
