import { BrazilianMapBase } from "./BrazilianMapBase"
import { useTranslation } from "../../../../../i18n/"
import { BrazilianMapProps } from "../types.ts"

export const BrazilianMap = async ({ lng }: BrazilianMapProps) => {
	const { t } = await useTranslation(lng, "map")
	return <BrazilianMapBase t={t} lng={lng} />
}
