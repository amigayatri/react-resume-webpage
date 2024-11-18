"use client"

import { MusicBase } from "./MusicBase"
import { useTranslation } from "../../../../i18n/client"
import { MusicProps } from "./types"

export function Music(props: MusicProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "musics")
	return <MusicBase t={t} {...props} />
}
