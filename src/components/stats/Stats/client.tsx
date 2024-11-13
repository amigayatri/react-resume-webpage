"use client"

import { StatsBase } from "./StatsBase"
import { useTranslation } from "../../../i18n/client"
import { StatsProps } from "../types"

export const Stats = ({ lng }: StatsProps) => {
	const { t } = useTranslation(lng, "stats")
	return <StatsBase t={t} lng={lng} />
}
