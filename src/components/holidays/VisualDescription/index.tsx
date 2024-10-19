import { useTheme } from "styled-components"
import {
	VisualDescriptionWrapper,
	KeyWrapper
} from "./VisualDescription.styled"
import { useTranslation } from "react-i18next"

const VisualDescription = () => {
	const theme = useTheme()
	const { t } = useTranslation()
	const keys = [
		["weekends", theme.orange],
		["extended", theme.pink],
		["midweek", theme.blue]
	]
	return (
		<VisualDescriptionWrapper>
			{keys.map(([key, color]) => (
				<KeyWrapper
					style={{ backgroundColor: color }}
					key={"description-key-" + key}
				>
					{t(`brazilianHolidays.description.${key}`)}
				</KeyWrapper>
			))}
		</VisualDescriptionWrapper>
	)
}

export default VisualDescription
