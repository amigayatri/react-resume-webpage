"use client"

import { AvailableMusicsBase } from "./AvailableMusicsBase"
import { useTranslation } from "../../../i18n/client"
import { AvailableMusicsProps } from "../types"

export function AvailableMusics({ lng }: AvailableMusicsProps) {
	const { t } = useTranslation(lng, "musics")
	return <AvailableMusicsBase t={t} lng={lng} />
}
