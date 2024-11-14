import { useTranslation } from "../../../i18n/"
import { InternalLink, ExternalLink } from "./components/"
import {
	BaseElementProps,
	LinkProps,
	ElementProps
} from "../../../types/common/"

export interface PageLinkProps extends ElementProps {
	to: LinkProps
	local: string
	hasDetails: boolean
}
export interface PageLinkBaseProps extends BaseElementProps {}
export interface PageLinkBaseProps extends PageLinkProps {}

export const PageLink = async (props: PageLinkProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "pagelist")
	const { isExternal } = props.to
	if (isExternal) return <ExternalLink t={t} {...props} />
	return <InternalLink t={t} {...props} />
}
