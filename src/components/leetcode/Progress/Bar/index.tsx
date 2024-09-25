import { BarWrapper, Bar, BarLabel, BarDoneLabel } from "./Bar.styled"
import {
	ProgressWrapper,
	ProgressTitle,
	ProgressDefault
} from "../Progress.styled"
import ProgressBarProps from "../../../../types/ProgressBarProps"

const ProgressBar = ({ title, progress, color }: ProgressBarProps) => {
	const { done, total } = progress
	return (
		<ProgressWrapper>
			<ProgressTitle>{title}</ProgressTitle>
			<BarWrapper tabIndex={0}>
				<Bar $color={color.total} $percentage={100}></Bar>
				<BarLabel>{total}</BarLabel>
				<Bar $done $color={color.done} $percentage={(done / total) * 100}></Bar>
				<BarDoneLabel $color={color.done}>{done}</BarDoneLabel>
				<ProgressDefault max={total} value={done} />
			</BarWrapper>
		</ProgressWrapper>
	)
}

export default ProgressBar
