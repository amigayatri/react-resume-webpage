import {
	Circle,
	CircleInfo,
	CircleDoneLabel,
	CircleTotalLabel
} from "./Circle.styled"
import {
	ProgressWrapper,
	ProgressTitle,
	ProgressDefault
} from "../Progress.styled"
import ProgressBarProps from "../../../../types/ProgressBarProps"

const ProgressCircle = ({ title, progress, color, size }: ProgressBarProps) => {
	const { done, total } = progress
	return (
		<ProgressWrapper>
			<ProgressTitle $hide>{title}</ProgressTitle>
			<Circle
				tabIndex={0}
				$size={size}
				$color={color}
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
export default ProgressCircle
