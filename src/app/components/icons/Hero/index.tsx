import Element from "../../../types/ElementProps"
import { HeroBase } from "./HeroBase"
import { useTranslation } from "../../../i18n/"

export const Hero = async ({ lng }: Element) => {
	const { i18n, t } = await useTranslation(lng, "iconlist")
	return <HeroBase t={t} i18n={i18n} lng={lng} />
}
