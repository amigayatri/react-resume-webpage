import { useTranslation } from "react-i18next"
import icons from "../constants/icons-map"
import usedIcons from "../constants/usedIcons"

interface Props {
	id: string
	size: number
	local: string
	toggle?: boolean
}

const SVGIcon = ({ id, size, toggle, local }: Props) => {
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
		return <IconElement isToggle={toggle === true} size={size} alt={alt} />
	}
}

export default SVGIcon
