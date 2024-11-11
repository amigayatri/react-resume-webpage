import Element from "../../../types/common/ElementProps"
import { LeetcodeStatsBase } from "./LeetcodeStatsBase"
import { useTranslation } from "../../../i18n/"

export const LeetcodeStats = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "leetcode")
	return <LeetcodeStatsBase t={t} lng={lng} />
}
