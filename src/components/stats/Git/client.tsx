"use client"

import { GitStatsBase } from "./GitStatsBase"
import Element from "../../../types/common/ElementProps"
import { useTranslation } from "../../../i18n/client"

export const GitStats = ({ lng }: Element) => {
	const { t } = useTranslation(lng, "git")
	return <GitStatsBase t={t} lng={lng} />
}
