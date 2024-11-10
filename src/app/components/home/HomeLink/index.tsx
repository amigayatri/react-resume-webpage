import { useTranslation } from "../../../i18n/"
import { HomeLinkBase } from "./HomeLinkBase.tsx"
import Element from "../../../types/ElementProps.ts"
import Link from "../../../types/LinkProps.ts"

export interface HomeLinkProps extends Element {
	to: Link
}

export const HomeLink = async ({ lng, to }: HomeLinkProps) => {
	const { i18n } = await useTranslation(lng, "home")
	return <HomeLinkBase to={to} i18n={i18n} lng={lng} />
}
