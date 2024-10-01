interface Skill {
	problemsSolved: number
	tagName: string
	tagSlug: string
}

const emptySkillArr: Skill[] = []

export const emptySkills = {
	intermediate: emptySkillArr,
	advanced: emptySkillArr,
	fundamental: emptySkillArr
}

interface QueryResult {
	data: {
		matchedUser: {
			tagProblemCounts: {
				intermediate: Skill[]
				advanced: Skill[]
				fundamental: Skill[]
			}
		}
	}
}

export const formatSkills = (rawData: QueryResult) => {
	return rawData.data.matchedUser.tagProblemCounts
}
