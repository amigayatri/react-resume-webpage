import { AvailableMusicsBase } from "./AvailableMusicsBase"
import { useTranslation } from "../../../i18n/"
import { AvailableMusicsProps } from "../types"

export const AvailableMusics = async ({ lng }: AvailableMusicsProps) => {
	const { t } = await useTranslation(lng, "musics")
	return <AvailableMusicsBase t={t} lng={lng} />
}
