import { useTranslation } from "react-i18next"
import icons from "../constants/icons-map"

interface Props {
	id: string
	size: number
}

const SVGIcon = ({ id, size }: Props) => {
	const { t } = useTranslation()
	const IconElement = icons.get(id)
	const alt = t("icons.alt.".concat(id))
	if (IconElement !== undefined) {
		return <IconElement size={size} alt={alt} />
	}
}

export default SVGIcon
