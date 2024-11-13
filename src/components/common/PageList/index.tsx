import { PageListBase } from "./PageListBase"
import { useTranslation } from "../../../i18n/"
import {
	BaseElementProps,
	LinkProps,
	ElementProps
} from "../../../types/common/"

interface PageListProps extends ElementProps {
	links: LinkProps[]
	local: string
}

export interface PageListElementProps extends PageListProps {
	namespace: string
}

export interface PageListBaseProps extends BaseElementProps {}
export interface PageListBaseProps extends PageListProps {}

export const PageList = async (props: PageListElementProps) => {
	const { lng, namespace } = props
	const { t } = await useTranslation(lng, namespace)
	return <PageListBase t={t} {...props} />
}
