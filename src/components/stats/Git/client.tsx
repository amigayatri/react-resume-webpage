"use client"

import { GitStatsBase } from "./GitStatsBase"
import { useTranslation } from "../../../i18n/client"
import { GitStatsProps } from "./types"

export const GitStats = ({ lng }: GitStatsProps) => {
	const { t } = useTranslation(lng, "git")
	return <GitStatsBase t={t} lng={lng} />
}
