interface Data {
	totalQuestions: number
	totalSolved: number
	totalEasy: number
	easySolved: number
	totalMedium: number
	mediumSolved: number
	totalHard: number
	hardSolved: number
	ranking: number
	acceptanceRate: number
	submissionCalendar: {
		[key: string]: number
	}
}

const useFormatData = (username: string, rawData: Data | null) => {
	if (rawData !== null) {
		return {
			questions: {
				total: {
					total: rawData.totalQuestions,
					done: rawData.totalSolved
				},
				easy: {
					total: rawData.totalEasy,
					done: rawData.easySolved
				},
				medium: {
					total: rawData.totalMedium,
					done: rawData.mediumSolved
				},
				hard: {
					total: rawData.totalHard,
					done: rawData.hardSolved
				}
			},
			profile: {
				ranking: rawData.ranking,
				acceptanceRate: rawData.acceptanceRate,
				username: username
			},
			calendar: rawData.submissionCalendar
		}
	} else {
		return {
			questions: {
				total: {
					total: -1,
					done: -1
				},
				easy: {
					total: -1,
					done: -1
				},
				medium: {
					total: -1,
					done: -1
				},
				hard: {
					total: -1,
					done: -1
				}
			},
			profile: {
				ranking: -1,
				acceptanceRate: -1,
				username: username
			},
			calendar: {
				"0": -1
			}
		}
	}
}

export default useFormatData
