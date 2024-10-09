import Language from "../../../types/ProgrammingLanguageProps"

export const emptyLanguages: Language[] = []

interface QueryResult {
	matchedUser: {
		languageProblemCount: Language[]
	}
}

export const formatLanguages = (rawData: QueryResult) => {
	const languages = rawData.matchedUser.languageProblemCount
	const relevantLanguages: Language[] = []
	languages.forEach((lang: Language) => {
		if (lang.problemsSolved >= 5) {
			relevantLanguages.push(lang)
		}
	})
	return relevantLanguages
}
