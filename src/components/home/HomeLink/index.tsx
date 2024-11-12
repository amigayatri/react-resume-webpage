import { useTranslation } from "../../../i18n/"
import { HomeLinkBase } from "./HomeLinkBase.tsx"
import Element from "../../../types/common/ElementProps.ts"
import Link from "../../../types/common/LinkProps.ts"

export interface HomeLinkProps extends Element {
	to: Link
}

export const HomeLink = async ({ lng, to }: HomeLinkProps) => {
	const { t } = await useTranslation(lng, "pagelist")
	return <HomeLinkBase t={t} to={to} lng={lng} />
}
