import { useTranslation } from "react-i18next"
import { useTheme } from "styled-components"
import { icons } from "./icons"

interface Props {
	id: string
	size: number
	i?: number
}

const resumeIcons = new Set(["email", "linkedin", "phone", "website"])
const homeIcons = new Set(["github", "linkedinH", "palette", "resume"])

export const SVGIcon = (props: Props) => {
	const id = props.id
	const size = props.size
	const i = props.i != undefined ? props.i : -1
	const theme = useTheme()
	const { t } = useTranslation()

	const showIcon = icons.get(id)
	const alt = t("icons.alt." + id)
	let color = "#212117"
	if (showIcon != undefined) {
		if (resumeIcons.has(id)) {
			color = i & 1 ? theme.accent : theme.secondAccent
		} else if (homeIcons.has(id)) {
			color = theme.secondAccent
		} else if (id === 'light') {
			color = "#212117"
		}
		return showIcon({ alt, color, size })
	}
}
