import Element from "../../../types/common/ElementProps"
import { HeroBase } from "./HeroBase"
import { useTranslation } from "../../../i18n/"

export const Hero = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "iconlist")
	return <HeroBase t={t} lng={lng} />
}
