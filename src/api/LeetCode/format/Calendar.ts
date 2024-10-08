interface ActiveDay {
	date: Date
	submissions: number
}

export const emptyCalendar: ActiveDay[] = []

interface QueryResult {
	data: {
		matchedUser: {
			userCalendar: {
				submissionCalendar: string
			}
		}
	}
}

export const formatCalendar = (rawData: QueryResult) => {
	const days = JSON.parse(
		rawData.data.matchedUser.userCalendar.submissionCalendar
	)
	const calendar: ActiveDay[] = []
	for (const [rawDate, submissions] of Object.entries(days)) {
		calendar.push({
			date: new Date(Number(rawDate) * 1000),
			submissions: Number(submissions)
		})
	}
	return calendar
}
