interface Questions {
	easy: number
	medium: number
	hard: number
	total: number
}

export const emptyQuestions: Questions = {
	easy: -1,
	medium: -1,
	hard: -1,
	total: -1
}

interface QueryResult {
	totalEasy: number
	totalMedium: number
	totalHard: number
	totalQuestions: number
}

export const formatQuestions = (rawData: QueryResult) => {
	return {
		easy: rawData.totalEasy,
		medium: rawData.totalMedium,
		hard: rawData.totalHard,
		total: rawData.totalQuestions
	}
}
