import { useTranslation } from "../../../i18n/"
import { FooterBase } from "./FooterBase.tsx"
import { ElementProps, BaseElementProps } from "../../../types/common/"

export interface FooterProps extends ElementProps {
	isRTL: boolean
}

export interface FooterBaseProps extends FooterProps {}
export interface FooterBaseProps extends BaseElementProps {}

export const Footer = async ({ lng, isRTL }: FooterProps) => {
	const { t } = await useTranslation(lng, "footer")
	return <FooterBase isRTL={isRTL} t={t} lng={lng} />
}
