import { useTranslation } from "../../../i18n/"
import { NavigationBase } from "./NavigationBase.tsx"
import Element from "../../../types/ElementProps.ts"

export const Navigation = async ({ lng }: Element) => {
	const { i18n, t } = await useTranslation(lng, "home")
	return <NavigationBase t={t} i18n={i18n} lng={lng} />
}