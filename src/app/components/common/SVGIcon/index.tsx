import { useTranslation } from "../../../i18n/"
import { SVGIconBase } from "./SVGIconBase.tsx"
import Element from "../../../types/ElementProps.ts"

export interface SVGProps extends Element {
	id: string
	size: number
	local: string
	noTransition?: boolean
	color?: string
}

export const SVGIcon = async (props: SVGProps) => {
	const { lng } = props
	const { i18n } = await useTranslation(lng, "icons")
	return <SVGIconBase i18n={i18n} {...props} />
}
