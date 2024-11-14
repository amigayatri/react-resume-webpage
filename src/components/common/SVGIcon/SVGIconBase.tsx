import { SVGBaseProps } from "./"
import { icons, usedIcons } from "./constants"

export const SVGIconBase = ({
	id,
	size,
	local,
	noTransition,
	color,
	t
}: SVGBaseProps) => {
	const prevLocalSet = usedIcons.get(local)
	const prevLocalIcons =
		prevLocalSet === undefined ? new Set<string>() : prevLocalSet
	prevLocalIcons.add(id)
	usedIcons.set(local, prevLocalIcons)
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
