import { useTranslation } from "react-i18next"
import icons from "../constants/icons-map"
import usedIcons from "../constants/usedIcons"

interface Props {
	id: string
	size: number
	local: string
	toggle?: boolean
	noTransition?: boolean
	color?: string
}

const SVGIcon = ({ id, size, toggle, local, noTransition, color }: Props) => {
	const { t } = useTranslation()
	const IconElement = icons.get(id)
	const alt = t("icons.alt.".concat(id))
	if (IconElement !== undefined) {
		let prevLocal = usedIcons.get(local)
		if (prevLocal === undefined) {
			prevLocal = new Set()
		}
		prevLocal.add(id)
		usedIcons.set(local, prevLocal)
		return (
			<IconElement
				color={color === undefined ? "currentColor" : color}
				hasTransition={noTransition !== true}
				isToggle={toggle === true}
				size={size}
				alt={alt}
			/>
		)
	}
}

export default SVGIcon
