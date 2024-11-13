import { HeroBase } from "./HeroBase"
import { useTranslation } from "../../../i18n/"
import { HeroProps } from "../types.ts"

export const Hero = async ({ lng }: HeroProps) => {
	const { t } = await useTranslation(lng, "holidays")
	return <HeroBase t={t} lng={lng} />
}
