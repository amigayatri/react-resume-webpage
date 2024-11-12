import { useGetCurrentHost } from "../../hooks/"
import { formatQuestions, emptyQuestions } from "./format/Questions.ts"
import { formatLanguages, emptyLanguages } from "./format/Languages.ts"
import { formatSkills, emptySkills } from "./format/Skills.ts"
import { formatSolved, emptySolved } from "./format/Solved.ts"
import { formatBadges, emptyBadges } from "./format/Badges.ts"
import { formatCalendar, emptyCalendar } from "./format/Calendar.ts"
import { formatProfile, emptyProfile } from "./format/Profile.ts"

export const empty = {
	questions: emptyQuestions,
	languages: emptyLanguages,
	skills: emptySkills,
	solved: emptySolved,
	badges: emptyBadges,
	calendar: emptyCalendar,
	profile: emptyProfile
}

export class LeetCode {
	user: string
	baseURL: string
	min: number

	constructor(username: string, min?: number) {
		this.min = min === undefined ? 0 : min
		this.user = username
		this.baseURL = useGetCurrentHost()
	}

	getProfile = async () => {
		const response = await fetch(`${this.baseURL}/${this.user}`)
		const body = await response.json()
		return formatProfile(body)
	}

	getCalendar = async () => {
		const year = new Date().getFullYear()
		const response = await fetch(
			`${this.baseURL}/userProfileCalendar?username=${this.user}&year=${year}/`
		)
		const body = await response.json()
		return formatCalendar(body)
	}

	getBadges = async () => {
		const response = await fetch(`${this.baseURL}/${this.user}/badges`)
		const body = await response.json()
		return formatBadges(body)
	}

	getSolved = async () => {
		const response = await fetch(`${this.baseURL}/${this.user}/solved`)
		const body = await response.json()
		return formatSolved(body)
	}

	getSkills = async () => {
		const response = await fetch(`${this.baseURL}/skillStats/${this.user}`)
		const body = await response.json()
		return formatSkills(body)
	}

	getLanguages = async () => {
		const response = await fetch(
			`${this.baseURL}/languageStats?username=${this.user}`
		)
		const body = await response.json()
		return formatLanguages(body, this.min)
	}

	getQuestions = async () => {
		const response = await fetch(`${this.baseURL}/userProfile/${this.user}`)
		const body = await response.json()
		return formatQuestions(body)
	}
}
