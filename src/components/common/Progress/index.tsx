import { ProgressBase } from "./ProgressBase"
import { ElementProps } from "../../../types/common/"

interface ProgressProps {
	done: number
	total: number
	acceptance?: number
}

export interface ProgressBarProps extends ElementProps {
	title: string
	progress: ProgressProps
	size?: number
	color: {
		done: string
		total: string
	}
}

type progressType = "bar" | "circle"
export interface ProgressElementProps extends ProgressBarProps {
	type: progressType
}

export const Progress = (props: ProgressElementProps) => {
	return <ProgressBase {...props} />
}
