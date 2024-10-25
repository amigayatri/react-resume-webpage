import styled from "styled-components"
import { Label, ProgressWrapper } from "../Progress.styled"

export const BarLabel = styled(Label)``

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

export const ProgressDefault = styled.progress`
	visibility: hidden;
	position: absolute;
`
