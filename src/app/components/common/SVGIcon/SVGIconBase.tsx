import { SVGProps } from "./index"
import { icons, usedIcons } from "./constants"
interface SVGBaseProps extends SVGProps {
	i18n: any
}

export const SVGIconBase = ({
	id,
	size,
	local,
	noTransition,
	color,
	i18n,
	lng
}: SVGBaseProps) => {
	const prevLocalIcons = usedIcons.get(local) || new Set()
	prevLocalIcons.add(id)
	usedIcons.set(local, prevLocalIcons)
	const t = i18n.getFixedT(lng, "icons")
	const alt = t(`alt.${id}`)
	const IconEl = icons.get(id)
	if (IconEl === undefined) return
	return (
		<IconEl
			hasTransition={noTransition !== true}
			isToggle={local === "toggle"}
			alt={alt}
			size={size}
			color={color || "currentColor"}
		/>
	)
}
