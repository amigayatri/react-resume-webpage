import { useTranslation } from "../../../i18n/"
import { NavigationBase } from "./NavigationBase.tsx"
import Element from "../../../types/common/ElementProps.ts"

export const Navigation = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "home")
	return <NavigationBase t={t} lng={lng} />
}
