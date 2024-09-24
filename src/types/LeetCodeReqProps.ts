import ProgressProps from "./ProgressProps"

export default interface LeetCodeReqProps {
	total: ProgressProps
	easy: ProgressProps
	medium: ProgressProps
	hard: ProgressProps
	ranking: number
	acceptanceRate: number
	calendar: {
		[key: string]: number
	}
}
