"use client"

import { LeetcodeStatsBase } from "./LeetcodeStatsBase"
import Element from "../../../types/common/ElementProps"
import { useTranslation } from "../../../i18n/client"

export const LeetcodeStats = ({ lng }: Element) => {
	const { t } = useTranslation(lng, "leetcode")
	return <LeetcodeStatsBase t={t} lng={lng} />
}
