import { StatsBase } from "./StatsBase"
import { useTranslation } from "../../../i18n/"
import { StatsProps } from "../types"

export const Stats = async ({ lng }: StatsProps) => {
	const { t } = await useTranslation(lng, "stats")
	return <StatsBase t={t} lng={lng} />
}
