import { useTranslation } from "../../../i18n/"
import { FooterBase } from "./FooterBase.tsx"
import Element from "../../../types/ElementProps.ts"

export const Footer = async ({ lng }: Element) => {
	const { i18n, t } = await useTranslation(lng, "common")
	return <FooterBase t={t} i18n={i18n} lng={lng} />
}
