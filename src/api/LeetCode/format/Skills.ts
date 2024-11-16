import { skillMap } from "../../../types/leetcode"

interface RawSkill {
	problemsSolved: number
	tagName: string
	tagSlug: string
}

interface QueryResult {
	data: {
		matchedUser: {
			tagProblemCounts: {
				intermediate: RawSkill[]
				advanced: RawSkill[]
				fundamental: RawSkill[]
			}
		}
	}
}

type formatSkills = (raw: QueryResult) => skillMap

export const formatSkills: formatSkills = (rawData) => {
	const list = rawData.data.matchedUser.tagProblemCounts
	const levelList = new Map()
	for (const [level, skills] of Object.entries(list)) {
		const skillLevelList = []
		for (const { problemsSolved, tagName } of skills) {
			skillLevelList.push({ count: problemsSolved, value: tagName })
		}
		levelList.set(level, skillLevelList)
	}
	return levelList
}
