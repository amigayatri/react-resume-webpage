import { SVGBaseProps } from "./"
import { getIcon } from "../../../icons/"

export const SVGIconBase = ({
	id,
	size,
	local,
	noTransition,
	color,
	t
}: SVGBaseProps) => {
	const alt = t(`alt.${id}`)
	const IconEl = getIcon(id, local)
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
