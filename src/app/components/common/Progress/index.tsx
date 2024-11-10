import ElementProps from "../../../types/ElementProps"
import { ProgressBase } from "./ProgressBase"

interface ProgressProps {
	done: number
	total: number
	acceptance?: number
}

export interface ProgressBarProps extends ElementProps {
	title: string
	progress: ProgressProps
	color: {
		done: string
		total: string
	}
}

export interface ProgressElementProps extends ProgressBarProps {
	type: string
}

export const Progress = (props: ProgressElementProps) => {
	return <ProgressBase {...props} />
}
