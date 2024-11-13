import { SolvedQuestions } from "../../../types/leetcode"

interface SubCount {
	difficulty: string
	count: number
	submissions: number
}

interface QueryResult {
	solvedProblem: number
	easySolved: number
	mediumSolved: number
	hardSolved: number
	totalSubmissionNum: SubCount[]
	acSubmissionNum: SubCount[]
}

type formatSolvedType = (raw: QueryResult) => SolvedQuestions

export const formatSolved: formatSolvedType = (rawData) => {
	return {
		solved: {
			easy: rawData.easySolved,
			medium: rawData.mediumSolved,
			hard: rawData.hardSolved,
			total: rawData.solvedProblem
		},
		acceptance: {
			total:
				rawData.acSubmissionNum[0].submissions /
				rawData.totalSubmissionNum[0].submissions,
			easy:
				rawData.acSubmissionNum[1].submissions /
				rawData.totalSubmissionNum[1].submissions,
			medium:
				rawData.acSubmissionNum[2].submissions /
				rawData.totalSubmissionNum[2].submissions,
			hard:
				rawData.acSubmissionNum[3].submissions /
				rawData.totalSubmissionNum[3].submissions
		}
	}
}
