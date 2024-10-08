import { BadgeListWrapper, BadgesWrapper } from "./BadgeList.styled"
import LeetCodeProps from "./../../../types/LeetCodeProps"
import { useEffect, useState } from "react"
import { empty } from "../../../api/LeetCode"
import BadgeComponent from "./BadgeComponent"
import { Title } from "../Common.styled"
import { useTranslation } from "react-i18next"

const BadgeList = ({ leetcode }: LeetCodeProps) => {
	const [badges, setBadges] = useState(empty.badges)
	useEffect(() => {
		leetcode.getBadges().then((badges) => {
			console.log(badges)
			setBadges(badges)
		})
	}, [])
	const { t } = useTranslation()
	console.log(badges)
	return (
		<BadgeListWrapper>
			<Title>{t("leetcode.badges.title")}</Title>
			<BadgesWrapper>
				{badges.map((badge, idx) => (
					<BadgeComponent key={`badge-number-${idx}`} {...badge} />
				))}
			</BadgesWrapper>
		</BadgeListWrapper>
	)
}

export default BadgeList
