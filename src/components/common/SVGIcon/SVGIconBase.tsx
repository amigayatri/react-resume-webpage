import { SVGElBaseProps } from "./"
import { getIcon } from "../../../icons/"

export const SVGIconBase = ({
	id,
	size,
	local,
	noTransition,
	color,
	rotationDeg,
	responsive,
	customStyle,
	t
}: SVGElBaseProps) => {
	const alt = t(`alt.${id}`)
	const IconEl = getIcon(id, local)
	if (IconEl === undefined) return
	console.log(responsive)
	return (
		<IconEl
			hasTransition={noTransition !== true}
			isToggle={local === "toggle"}
			alt={alt}
			size={size}
			isResponsive={responsive === true}
			rotationDeg={rotationDeg !== undefined ? rotationDeg : 0}
			color={color || "currentColor"}
			customStyle={customStyle}
		/>
	)
}
