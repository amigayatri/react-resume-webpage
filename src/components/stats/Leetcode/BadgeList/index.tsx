import { BadgeListWrapper, BadgesWrapper } from "./BadgeList.styled"
import { LeetCodeProps } from "../../../../types/leetcode/"
import { useEffect, useState } from "react"
import { empty } from "../../../../api/LeetCode"
import { BadgeComponent } from "./BadgeComponent"
import { Summary, Title } from "../Common.styled"
import { DetailedBadge } from "./DetailedBadge"

const emptyDetails = {
	name: "",
	icon: "",
	date: new Date()
}

export const BadgeList = ({ leetcode, t, lng }: LeetCodeProps) => {
	const [badges, setBadges] = useState(empty.badges)
	const [detailedBadge, setDetailedBadge] = useState(emptyDetails)
	useEffect(() => {
		leetcode.getBadges().then((badges) => {
			setBadges(badges)
		})
	}, [])
	return (
		<BadgeListWrapper>
			<Title>{t("badges.title")}</Title>
			<Summary>{t("badges.summary")}</Summary>
			<DetailedBadge t={t} lng={lng} details={detailedBadge} />
			<BadgesWrapper>
				{badges.map((badge, idx) => (
					<BadgeComponent
						t={t}
						lng={lng}
						details={detailedBadge}
						setDetails={(badge) => setDetailedBadge(badge)}
						key={`badge-number-${idx}`}
						badge={badge}
					/>
				))}
			</BadgesWrapper>
		</BadgeListWrapper>
	)
}
