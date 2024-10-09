import BadgeProps from "../../../types/BadgeProps"

interface RawBadge {
	id: string
	displayName: string
	icon: string
	creationDate: string
}

export const emptyBadges: BadgeProps[] = []

interface QueryResult {
	badges: RawBadge[]
}

export const formatBadges = (rawData: QueryResult) => {
	const { badges } = rawData
	const formatedBadges: BadgeProps[] = []
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
