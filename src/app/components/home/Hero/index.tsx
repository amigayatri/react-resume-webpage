import { useTranslation } from "../../../i18n/"
import { HeroBase } from "./HeroBase.tsx"
import Element from "../../../types/ElementProps.ts"

export const Hero = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "home")
	return <HeroBase i18n={i18n} lng={lng} />
}
