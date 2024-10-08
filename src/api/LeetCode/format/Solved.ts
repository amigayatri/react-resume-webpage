export const emptySolved = {
	solved: {
		easy: -1,
		medium: -1,
		hard: -1,
		total: -1
	},
	acceptance: {
		total: -1,
		easy: -1,
		medium: -1,
		hard: -1
	}
}

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

export const formatSolved = (rawData: QueryResult) => {
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
