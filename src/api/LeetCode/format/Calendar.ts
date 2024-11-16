import { calendarArr } from "../../../types/leetcode"

interface QueryResult {
	data: {
		matchedUser: {
			userCalendar: {
				submissionCalendar: string
			}
		}
	}
}

type formatCalendar = (raw: QueryResult) => calendarArr

export const formatCalendar: formatCalendar = (rawData: QueryResult) => {
	const days = JSON.parse(
		rawData.data.matchedUser.userCalendar.submissionCalendar
	)
	const calendar: calendarArr = []
	for (const [rawDate, submissions] of Object.entries(days)) {
		calendar.push({
			date: new Date(Number(rawDate) * 1000),
			submissions: Number(submissions)
		})
	}
	return calendar
}
