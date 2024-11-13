import { languageArrType } from "../../../types/leetcode"

interface QueryResult {
	matchedUser: {
		languageProblemCount: languageArrType
	}
}

type formatLanguagesType = (raw: QueryResult, min: number) => languageArrType

export const formatLanguages: formatLanguagesType = (rawData, min) => {
	const languages = rawData.matchedUser.languageProblemCount
	const relevantLanguages: languageArrType = []
	languages.forEach((lang) => {
		if (lang.problemsSolved >= min) {
			relevantLanguages.push(lang)
		}
	})
	return relevantLanguages
}
