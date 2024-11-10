import Element from "../../../types/ElementProps"
import { BrazilianMapBase } from "./BrazilianMapBase"
import { useTranslation } from "../../../i18n/"

export const BrazilianMap = async ({ lng }: Element) => {
	const { i18n, t } = await useTranslation(lng, "brasil")
	return <BrazilianMapBase t={t} i18n={i18n} lng={lng} />
}
