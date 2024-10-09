interface RawSkill {
	problemsSolved: number
	tagName: string
	tagSlug: string
}
import { Tag } from "react-tagcloud"

export const emptySkills: Map<string, Tag[]> = new Map()

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

export const formatSkills = (rawData: QueryResult) => {
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
