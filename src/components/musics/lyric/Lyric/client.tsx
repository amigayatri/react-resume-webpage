"use client"

import { LyricBase } from "./LyricBase"
import { useTranslation } from "../../../../i18n/client"
import { LyricProps } from "../types"

export function Lyric(props: LyricProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "musics")
	return <LyricBase t={t} {...props} />
}
