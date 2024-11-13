"use client"

import { LeetcodeStatsBase } from "./LeetcodeStatsBase"
import { useTranslation } from "../../../i18n/client"
import { LeetcodeStatsProps } from "./types"

export const LeetcodeStats = ({ lng }: LeetcodeStatsProps) => {
	const { t } = useTranslation(lng, "leetcode")
	return <LeetcodeStatsBase t={t} lng={lng} />
}
