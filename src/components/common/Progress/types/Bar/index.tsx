import { BarWrapper, BarLabel, BarDoneLabel } from "./Bar.styled"
import {
	ProgressWrapper,
	ProgressTitle,
	TitleWrapper,
	ProgressDefault,
	Bar
} from "../../Progress.styled"
import { ProgressBarProps } from "../.."

export const ProgressBar = ({ title, progress, color }: ProgressBarProps) => {
	const { done, total } = progress
	if (total === 0) return
	return (
		<ProgressWrapper>
			<TitleWrapper>
				<ProgressTitle>{title}</ProgressTitle>
			</TitleWrapper>
			<BarWrapper tabIndex={0}>
				<Bar $color={color.total} $full $percentage={100}></Bar>
				<BarLabel $color={color.total}>{total}</BarLabel>
				<Bar
					$done
					$full={done === total}
					$color={color.done}
					$percentage={(done / total) * 100}
				></Bar>
				<BarDoneLabel $color={color.done}>{done}</BarDoneLabel>
				<ProgressDefault max={total} value={done} />
			</BarWrapper>
		</ProgressWrapper>
	)
}
