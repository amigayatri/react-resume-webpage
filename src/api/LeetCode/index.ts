import { useGetCurrentHost } from "../../hooks/"
import { Profile } from "../../types/leetcode"
import {
	formatBadges,
	formatCalendar,
	formatLanguages,
	formatProfile,
	formatQuestions,
	formatSkills,
	formatSolved
} from "./format/"

export const emptyProfile: Profile = {
	username: "",
	name: "",
	country: "",
	ranking: -1,
	birthday: new Date()
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
