import ProgressProps from "../../../types/ProgressBarProps"
import ProgressCircle from "./Circle"
import ProgressBar from "./Bar"

const Progress = ({ type, title, progress, color, size }: ProgressProps) => {
	if (type === "circle")
		return (
			<ProgressCircle
				size={size}
				color={color}
				title={title}
				progress={progress}
			/>
		)
	else if (type === "bar") {
		return (
			<ProgressBar
				size={size}
				color={color}
				title={title}
				progress={progress}
			/>
		)
	}
}

export default Progress
