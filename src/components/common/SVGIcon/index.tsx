import { useTranslation } from "../../../i18n/"
import { SVGIconBase } from "./SVGIconBase.tsx"
import { ElementProps, BaseElementProps } from "../../../types/common/"

export interface SVGProps extends ElementProps {
	id: string
	size: number
	local: string
	noTransition?: boolean
	color?: string
}

export interface SVGBaseProps extends SVGProps {}
export interface SVGBaseProps extends BaseElementProps {}


export const SVGIcon = async (props: SVGProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "icons")
	return <SVGIconBase t={t} {...props} />
}
