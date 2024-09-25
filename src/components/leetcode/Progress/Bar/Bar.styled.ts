import styled from "styled-components"
import { Label, ProgressWrapper } from "../Progress.styled"

export const BarLabel = styled(Label)`
	opacity: 0.2;
`

export const BarDoneLabel = styled(BarLabel)`
	color: ${({ $color, theme }) => $color || theme.accent};
	font-size: 1.5rem;
`
export const BarWrapper = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 32px;

	${ProgressWrapper}:hover > & > ${BarLabel} {
		opacity: 1;
	}
	${ProgressWrapper}:focus > & > ${BarLabel} {
		opacity: 1;
	}
`
export const Bar = styled.div<{
	$percentage: number
	$color?: string
	$done?: boolean
}>`
	background-color: ${({ $color, $done, theme }) =>
		$done ? $color || theme.primary : ($color || theme.primary) + "14"};
	width: ${({ $percentage }) => $percentage}%;
	height: 16px;
	position: absolute;
	bottom: 8px;
	left: 0;
	border-radius: ${({ $done }) => ($done ? "4px 0 0 4px" : "4px")};
`

export const ProgressDefault = styled.progress`
	visibility: hidden;
	position: absolute;
`
