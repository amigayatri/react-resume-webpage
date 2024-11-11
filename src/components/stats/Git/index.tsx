import Element from "../../../types/common/ElementProps"
import { GitStatsBase } from "./GitStatsBase"
import { useTranslation } from "../../../i18n/"

export const GitStats = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "git")
	return <GitStatsBase t={t} lng={lng} />
}
