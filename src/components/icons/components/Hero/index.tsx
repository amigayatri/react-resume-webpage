import { HeroBase } from "./HeroBase"
import { useTranslation } from "../../../../i18n/"
import { HeroProps } from "../types"

export const Hero = async (props: HeroProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "iconlist")
	return <HeroBase t={t} {...props} />
}
