import { useTranslation } from "../../../i18n/"
import { SVGIconBase } from "./SVGIconBase.tsx"
import { BaseElementProps, SVGElProps } from "../../../types/common/"

export interface SVGElBaseProps extends SVGElProps {}
export interface SVGElBaseProps extends BaseElementProps {}

export const SVGIcon = async (props: SVGElProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "icons")
	return <SVGIconBase t={t} {...props} />
}
