import { BadgeComponentWrapper, BadgeImg } from "./BadgeComponent.styled"
import BadgeProps from "./../../../../types/BadgeProps"
import { useTranslation } from "react-i18next"

const BadgeComponent = (badge: BadgeProps) => {
	const { t, i18n } = useTranslation()
	const date = badge.date.toLocaleDateString(i18n.language)
	const alt = t("leetcode.badges.icon", { BadgeName: badge.name })
	return (
		<BadgeComponentWrapper>
			<BadgeImg src={badge.icon} alt={alt} />
			{date}
		</BadgeComponentWrapper>
	)
}

export default BadgeComponent
