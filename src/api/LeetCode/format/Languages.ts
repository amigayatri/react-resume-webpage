import { ProgrammingLanguageProps } from "../../../types/leetcode/"

export const emptyLanguages: ProgrammingLanguageProps[] = []

interface QueryResult {
	matchedUser: {
		languageProblemCount: ProgrammingLanguageProps[]
	}
}

export const formatLanguages = (rawData: QueryResult, min: number) => {
	const languages = rawData.matchedUser.languageProblemCount
	const relevantLanguages: ProgrammingLanguageProps[] = []
	languages.forEach((lang: ProgrammingLanguageProps) => {
		if (lang.problemsSolved >= min) {
			relevantLanguages.push(lang)
		}
	})
	return relevantLanguages
}
