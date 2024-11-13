import { calendarArrType } from "../../../types/leetcode"

interface QueryResult {
	data: {
		matchedUser: {
			userCalendar: {
				submissionCalendar: string
			}
		}
	}
}

type formatCalendarType = (raw: QueryResult) => calendarArrType

export const formatCalendar: formatCalendarType = (rawData: QueryResult) => {
	const days = JSON.parse(
		rawData.data.matchedUser.userCalendar.submissionCalendar
	)
	const calendar: calendarArrType = []
	for (const [rawDate, submissions] of Object.entries(days)) {
		calendar.push({
			date: new Date(Number(rawDate) * 1000),
			submissions: Number(submissions)
		})
	}
	return calendar
}
