import { useTranslation } from "../../../i18n/"
import { HeroBase } from "./HeroBase.tsx"
import { HeroProps } from "../types"

export const Hero = async ({ lng }: HeroProps) => {
	const { t } = await useTranslation(lng, "home")
	return <HeroBase t={t} lng={lng} />
}
