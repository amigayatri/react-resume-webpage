import { SimpleHeroBase } from "./SimpleHeroBase"
import { useTranslation } from "../../../i18n/"
import { BaseElementProps, ElementProps } from "../../../types/common/"
import { PaletteInfoProps } from "../../../types/palette"

interface SimpleHeroProps extends ElementProps {
	titleIcon?: string
	hasMulticolored?: boolean
	local: string
	paletteInfo?: PaletteInfoProps
}

export interface SimpleHeroElementProps extends SimpleHeroProps {
	namespace: string
}

export interface SimpleHeroBaseProps extends BaseElementProps {}
export interface SimpleHeroBaseProps extends SimpleHeroProps {}

export const SimpleHero = async (props: SimpleHeroElementProps) => {
	const { lng, namespace } = props
	const { t } = await useTranslation(lng, namespace)
	return <SimpleHeroBase t={t} {...props} />
}
