import { useTranslation } from "../../../i18n/"
import { HeaderBase } from "./HeaderBase.tsx"
import Element from "../../../types/ElementProps.ts"

export const Header = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "translation")
	return <HeaderBase i18n={i18n} lng={lng} />
}
