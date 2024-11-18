import { LyricBase } from "./LyricBase"
import { useTranslation } from "../../../../i18n/"
import { LyricProps } from "../types"

export const Lyric = async (props: LyricProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "musics")
	return <LyricBase t={t} {...props} />
}
