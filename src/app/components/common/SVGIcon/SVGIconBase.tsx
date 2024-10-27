import { SVGProps } from "./index"
import { HomeIcon } from "../../../icons/HomeIcon"

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
	console.log("oi")
	const t = i18n.getFixedT(lng, "translation")
	const alt = t("icons.alt.".concat(id))

	return (
		<HomeIcon
			color={color === undefined ? "currentColor" : color}
			hasTransition={noTransition !== true}
			isToggle={local === "toggle"}
			size={size}
			alt={alt}
		/>
	)
}
