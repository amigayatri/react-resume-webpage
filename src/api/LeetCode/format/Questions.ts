import { Questions } from "../../../types/leetcode"

interface QueryResult {
	totalEasy: number
	totalMedium: number
	totalHard: number
	totalQuestions: number
}

type formatQuestionsType = (raw: QueryResult) => Questions

export const formatQuestions: formatQuestionsType = (rawData) => {
	return {
		easy: rawData.totalEasy,
		medium: rawData.totalMedium,
		hard: rawData.totalHard,
		total: rawData.totalQuestions
	}
}
