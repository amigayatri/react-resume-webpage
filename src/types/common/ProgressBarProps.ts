import ProgressProps from "./ProgressProps"

export default interface ProgressBarProps {
	title: string
	type?: string
	progress: ProgressProps
	size?: number
	color: {
		done: string
		total: string
	}
}
