import { BadgeListWrapper, BadgesWrapper } from "./BadgeList.styled"
import LeetCodeProps from "./../../../types/LeetCodeProps"
import { useEffect, useState } from "react"
import { empty } from "../../../api/LeetCode"
import BadgeComponent from "./BadgeComponent"
import { Summary, Title } from "../Common.styled"
import { useTranslation } from "react-i18next"
import DetailedBadge from "./DetailedBadge"

const emptyDetails = {
	name: "",
	icon: "",
	date: new Date()
}

const BadgeList = ({ leetcode }: LeetCodeProps) => {
	const [badges, setBadges] = useState(empty.badges)
	const [detailedBadge, setDetailedBadge] = useState(emptyDetails)
	useEffect(() => {
		leetcode.getBadges().then((badges) => {
			setBadges(badges)
		})
	}, [])
	const { t } = useTranslation()
	return (
		<BadgeListWrapper>
			<Title>{t("leetcode.badges.title")}</Title>
			<Summary>{t("leetcode.badges.summary")}</Summary>
			<DetailedBadge details={detailedBadge} />
			<BadgesWrapper>
				{badges.map((badge, idx) => (
					<BadgeComponent
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

export default BadgeList
