import { HeroBase } from "./HeroBase"
import { useTranslation } from "../../../../i18n/"
import { HeroProps } from "../../types"

export const Hero = async ({ lng }: HeroProps) => {
	const { t } = await useTranslation(lng, "iconlist")
	return <HeroBase t={t} lng={lng} />
}
