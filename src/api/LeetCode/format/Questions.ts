import { Questions } from "../../../types/leetcode"

interface QueryResult {
	totalEasy: number
	totalMedium: number
	totalHard: number
	totalQuestions: number
}

type formatQuestions = (raw: QueryResult) => Questions
export const formatQuestions: formatQuestions = (rawData) => {
	return {
		easy: rawData.totalEasy,
		medium: rawData.totalMedium,
		hard: rawData.totalHard,
		total: rawData.totalQuestions
	}
}
