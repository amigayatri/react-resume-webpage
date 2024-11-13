import { BrazilianMapBase } from "./BrazilianMapBase"
import { useTranslation } from "../../../i18n/"
import { BrazilianMapProps } from "../types"

export const BrazilianMap = async ({ lng }: BrazilianMapProps) => {
	const { t } = await useTranslation(lng, "brasil")
	return <BrazilianMapBase t={t} lng={lng} />
}
