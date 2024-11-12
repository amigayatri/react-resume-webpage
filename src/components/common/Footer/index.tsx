import { useTranslation } from "../../../i18n/"
import { FooterBase } from "./FooterBase.tsx"
import Element from "../../../types/common/ElementProps.ts"

export const Footer = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "footer")
	return <FooterBase t={t} lng={lng} />
}
