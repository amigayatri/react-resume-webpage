import { useTranslation } from "../../../i18n/"
import { SVGIconBase } from "./SVGIconBase.tsx"
import Element from "../../../types/common/ElementProps.ts"

export interface SVGProps extends Element {
	id: string
	size: number
	local: string
	noTransition?: boolean
	color?: string
}

export const SVGIcon = async (props: SVGProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "icons")
	return <SVGIconBase t={t} {...props} />
}
