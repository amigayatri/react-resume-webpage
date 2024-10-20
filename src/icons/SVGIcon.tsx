import { useTranslation } from "react-i18next"
import icons from "../constants/icons-map"

interface Props {
	id: string
	size: number
	toggle?: boolean
}

const SVGIcon = ({ id, size, toggle }: Props) => {
	const { t } = useTranslation()
	const IconElement = icons.get(id)
	const alt = t("icons.alt.".concat(id))
	if (IconElement !== undefined) {
		return <IconElement isToggle={toggle === true} size={size} alt={alt} />
	}
}

export default SVGIcon
