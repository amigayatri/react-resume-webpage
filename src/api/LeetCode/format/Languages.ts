import Language from "../../../app/types/ProgrammingLanguageProps"

export const emptyLanguages: Language[] = []

interface QueryResult {
	matchedUser: {
		languageProblemCount: Language[]
	}
}

export const formatLanguages = (rawData: QueryResult, min: number) => {
	const languages = rawData.matchedUser.languageProblemCount
	const relevantLanguages: Language[] = []
	languages.forEach((lang: Language) => {
		if (lang.problemsSolved >= min) {
			relevantLanguages.push(lang)
		}
	})
	return relevantLanguages
}
