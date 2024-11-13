import { GitStatsBase } from "./GitStatsBase"
import { useTranslation } from "../../../i18n/"
import { GitStatsProps } from "./types"

export const GitStats = async ({ lng }: GitStatsProps) => {
	const { t } = await useTranslation(lng, "git")
	return <GitStatsBase t={t} lng={lng} />
}
