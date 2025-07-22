import { useTranslation } from "../../../../../i18n/"
import { BrazilianMapProps } from "../types.ts"
import { BrazilianMapBase } from "./BrazilianMapBase"

export const BrazilianMap = async ({ lng }: BrazilianMapProps) => {
    const { t } = await useTranslation(lng, "map")
    return <BrazilianMapBase t={t} lng={lng} />
}
