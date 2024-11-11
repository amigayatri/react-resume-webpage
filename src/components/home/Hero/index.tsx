import { useTranslation } from "../../../i18n/"
import { HeroBase } from "./HeroBase.tsx"
import Element from "../../../types/common/ElementProps.ts"

export const Hero = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "home")
	return <HeroBase t={t} lng={lng} />
}
