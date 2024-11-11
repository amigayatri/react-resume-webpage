import Element from "../../../types/common/ElementProps"
import { BrazilianMapBase } from "./BrazilianMapBase"
import { useTranslation } from "../../../i18n/"

export const BrazilianMap = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "brasil")
	return <BrazilianMapBase t={t} lng={lng} />
}
