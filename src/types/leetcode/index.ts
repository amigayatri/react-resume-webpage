import { Tag } from "react-tagcloud"

interface ActiveDay {
	date: Date
	submissions: number
}
export type badgesArr = BadgeProps[]
export type calendarArr = ActiveDay[]
export type languageArr = ProgrammingLanguageProps[]
export type skillMap = Map<string, Tag[]>

export interface Profile {
	username: string
	name: string
	country: string
	ranking: number
	birthday: Date
}
export interface Questions {
	easy: number
	medium: number
	hard: number
	total: number
}
export interface SolvedQuestions {
	solved: {
		easy: number
		medium: number
		hard: number
		total: number
	}
	acceptance: {
		total: number
		easy: number
		medium: number
		hard: number
	}
}

export interface BadgeProps {
	name: string
	date: Date
	icon: string
}

export interface ProgrammingLanguageProps {
	problemsSolved: number
	languageName: string
}
