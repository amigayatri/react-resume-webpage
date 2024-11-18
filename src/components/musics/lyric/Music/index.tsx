import { MusicBase } from "./MusicBase"
import { useTranslation } from "../../../../i18n/"
import { MusicProps } from "./types"

export const Music = async (props: MusicProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "musics")
	return <MusicBase t={t} {...props} />
}
