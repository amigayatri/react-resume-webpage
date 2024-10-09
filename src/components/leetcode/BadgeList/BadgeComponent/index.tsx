import { BadgeComponentWrapper, BadgeImg } from "./BadgeComponent.styled"
import BadgeProps from "./../../../../types/BadgeProps"
import { useTranslation } from "react-i18next"

interface BadgeComponentProps {
	badge: BadgeProps
	setDetails: (badge: BadgeProps) => void
}

const BadgeComponent = ({ badge, setDetails }: BadgeComponentProps) => {
	const { t } = useTranslation()
	const alt = t("leetcode.badges.icon", { BadgeName: badge.name })
	return (
		<BadgeComponentWrapper onClick={() => setDetails(badge)} tabIndex={0}>
			<BadgeImg src={badge.icon} alt={alt} />
		</BadgeComponentWrapper>
	)
}

export default BadgeComponent
