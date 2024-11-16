import { badgesArr } from "../../../types/leetcode/"

interface RawBadge {
	id: string
	displayName: string
	icon: string
	creationDate: string
}

interface QueryResult {
	badges: RawBadge[]
}

type formatBadges = (raw: QueryResult) => badgesArr

export const formatBadges: formatBadges = (rawData) => {
	const { badges } = rawData
	const formatedBadges: badgesArr = []
	badges.sort((a, b) => (a.creationDate < b.creationDate ? -1 : 1))
	badges.forEach((badge: RawBadge) => {
		formatedBadges.push({
			name: badge.displayName,
			icon: badge.icon,
			date: new Date(badge.creationDate)
		})
	})
	return formatedBadges
}
