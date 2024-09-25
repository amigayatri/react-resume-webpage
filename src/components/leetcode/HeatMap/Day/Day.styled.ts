import styled from "styled-components"
import {
	CalendarSymbolWrapper,
	Exercises,
	FaceWrapper
} from "./CalendarSymbol/CalendarSymbol.styled"

export const DayWrapper = styled.span`
	position: relative;
	max-height: 40px;
	max-width: 40px;
`
export const ContentWrapper = styled.span`
	position: relative;
	transition: ${({ theme }) => theme.transition};
	& ${CalendarSymbolWrapper} {
		scale: 0.8;
	}
	&:hover,
	&:focus {
		position: absolute;
		top: 0px;
		left: 0px;
		& ${CalendarSymbolWrapper} {
			scale: 1.2;

			& ${Exercises} {
				display: block;
			}
			& ${FaceWrapper} {
				display: none;
			}
		}
	}
`
