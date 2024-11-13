import { BadgeComponentWrapper, BadgeImg } from "./BadgeComponent.styled"
import { BadgeComponentProps } from "../../../types"

export const BadgeComponent = ({
	badge,
	details,
	setDetails,
	t
}: BadgeComponentProps) => {
	const alt = t("leetcode.badges.icon", { BadgeName: badge.name })
	return (
		<BadgeComponentWrapper
			$isSelected={details.name === badge.name}
			onClick={() => setDetails(badge)}
			tabIndex={0}
		>
			<BadgeImg src={badge.icon} alt={alt} />
		</BadgeComponentWrapper>
	)
}
