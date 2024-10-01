interface RawBadge {
	id: string
	displayName: string
	icon: string
	creationDate: string
}

interface Badge {
	name: string
	date: Date
	icon: string
}

export const emptyBadges: Badge[] = []

interface QueryResult {
	badges: RawBadge[]
}

export const formatBadges = (rawData: QueryResult) => {
	const { badges } = rawData
	const formatedBadges: Badge[] = []
	badges.forEach((badge: RawBadge) => {
		formatedBadges.push({
			name: badge.displayName,
			icon: badge.icon,
			date: new Date(badge.creationDate)
		})
	})
	return formatedBadges
}
