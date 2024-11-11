import Element from "../../../types/common/ElementProps"
import { StatsBase } from "./StatsBase"
import { useTranslation } from "../../../i18n/"

export const Stats = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "stats")
	return <StatsBase t={t} lng={lng} />
}
