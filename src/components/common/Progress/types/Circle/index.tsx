import {
	Circle,
	CircleInfo,
	CircleDoneLabel,
	CircleTotalLabel,
	CircleTitle
} from "./Circle.styled"
import {
	ProgressWrapper,
	ProgressDefault,
	TitleWrapper
} from "../../Progress.styled"
import { ProgressBarProps } from "../.."

export const ProgressCircle = ({
	title,
	progress,
	color,
	size
}: ProgressBarProps) => {
	const { done, total } = progress
	return (
		<ProgressWrapper $isCircle>
			<Circle
				tabIndex={0}
				$size={size === undefined ? 256 : size}
				$color={color}
				$percentage={(done / total) * 100}
			>
				<ProgressDefault max={total} value={done}></ProgressDefault>
				<CircleInfo>
					<CircleDoneLabel $color={color.done}>
						{done}
					</CircleDoneLabel>
					<CircleTotalLabel>{total}</CircleTotalLabel>
				</CircleInfo>
			</Circle>
			<TitleWrapper>
				<CircleTitle $color={color.done}>{title}</CircleTitle>
			</TitleWrapper>
		</ProgressWrapper>
	)
}
