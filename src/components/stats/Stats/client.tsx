"use client"

import { StatsBase } from "./StatsBase"
import Element from "../../../types/common/ElementProps"
import { useTranslation } from "../../../i18n/client"

export const Stats = ({ lng }: Element) => {
	const { t } = useTranslation(lng, "stats")
	return <StatsBase t={t} lng={lng} />
}
