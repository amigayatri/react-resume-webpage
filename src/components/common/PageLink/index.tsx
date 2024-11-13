import { useTranslation } from "../../../i18n/"
import { InternalLink, ExternalLink } from "./components/"
import {
	BaseElementProps,
	LinkProps,
	ElementProps
} from "../../../types/common/"

export interface PageLinkProps extends ElementProps {
	to: LinkProps
}
export interface PageLinkBaseProps extends BaseElementProps {}
export interface PageLinkBaseProps extends PageLinkProps {}

export const PageLink = async ({ lng, to }: PageLinkProps) => {
	const { t } = await useTranslation(lng, "pagelist")
	const { isExternal } = to
	if (isExternal) return <ExternalLink t={t} to={to} lng={lng} />
	return <InternalLink t={t} to={to} lng={lng} />
}
