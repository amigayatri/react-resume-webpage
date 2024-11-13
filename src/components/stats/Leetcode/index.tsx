import { LeetcodeStatsBase } from "./LeetcodeStatsBase"
import { useTranslation } from "../../../i18n/"
import { LeetcodeStatsProps } from "./types"

export const LeetcodeStats = async ({ lng }: LeetcodeStatsProps) => {
	const { t } = await useTranslation(lng, "leetcode")
	return <LeetcodeStatsBase t={t} lng={lng} />
}
