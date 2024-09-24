import {
	ProgressWrapper,
	ProgressTitle,
	ProgressDefault,
	Circle,
	BarWrapper,
	Bar,
	BarLabel,
	BarDoneLabel,
	CircleDoneLabel,
	CircleTotalLabel,
	CircleInfo
} from "./Progress.styled"
import ProgressProps from "../../../types/ProgressBarProps"

const ProgressCircle = ({ title, progress, color, size }: ProgressProps) => {
	const { done, total } = progress
	return (
		<ProgressWrapper>
			<ProgressTitle $hide>{title}</ProgressTitle>
			<Circle
				$size={size}
				$color={color.done}
				$percentage={(done / total) * 100}
			>
				<ProgressDefault max={total} value={done}></ProgressDefault>
				<CircleInfo>
					<CircleDoneLabel $color={color.done}>{done}</CircleDoneLabel>
					<CircleTotalLabel>{total}</CircleTotalLabel>
				</CircleInfo>
			</Circle>
		</ProgressWrapper>
	)
}

const ProgressBar = ({ title, progress, color }: ProgressProps) => {
	const { done, total } = progress
	return (
		<ProgressWrapper>
			<ProgressTitle>{title}</ProgressTitle>
			<BarWrapper>
				<Bar $percentage={100}></Bar>
				<BarLabel>{total}</BarLabel>
				<Bar $done $color={color.done} $percentage={(done / total) * 100}></Bar>
				<BarDoneLabel $color={color.done}>{done}</BarDoneLabel>
				<ProgressDefault max={total} value={done} />
			</BarWrapper>
		</ProgressWrapper>
	)
}

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
