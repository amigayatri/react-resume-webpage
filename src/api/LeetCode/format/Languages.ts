import { languageArr } from "../../../types/leetcode"

interface QueryResult {
	matchedUser: {
		languageProblemCount: languageArr
	}
}

type formatLanguages = (raw: QueryResult, min: number) => languageArr

export const formatLanguages: formatLanguages = (rawData, min) => {
	const languages = rawData.matchedUser.languageProblemCount
	const relevantLanguages: languageArr = []
	languages.forEach((lang) => {
		if (lang.problemsSolved >= min) {
			relevantLanguages.push(lang)
		}
	})
	return relevantLanguages
}
