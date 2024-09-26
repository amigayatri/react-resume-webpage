import styled from "styled-components"
import {
	CalendarSymbolWrapper,
	Day,
	Exercises,
	ExercisesWrapper,
	FaceWrapper
} from "./CalendarSymbol/CalendarSymbol.styled"
import media from "../../../../constants/medias"

export const DayWrapper = styled.span`
	position: relative;
	max-height: 72px;
	${media.max.md} {
		max-height: 56px;
	}
	${media.max.sm} {
		max-height: 40px;
	}
`
export const ContentWrapper = styled.span`
	position: relative;
	transition: ${({ theme }) => theme.transition};
	width: 64px;
	display: inline-block;
	height: 72px;
	${media.max.md} {
		width: 48px;
		height: 56px;
		& ${CalendarSymbolWrapper} {
			scale: 0.75;
		}
	}
	${media.max.sm} {
		height: 40px;
		width: 32px;
		& ${CalendarSymbolWrapper} {
			scale: 0.5;
		}
	}

	&:hover,
	&:focus {
		& ${CalendarSymbolWrapper} {
			position: absolute;
			scale: 1.2;
			${media.max.md} {
				scale: 0.95;
			}
			${media.max.sm} {
				scale: 0.7;
			}

			& ${Day} {
				height: 16px;
				width: 20px;
			}

			& ${ExercisesWrapper} {
				height: 48px;

				& ${Exercises} {
					width: 50px;
				}
			}
			& ${FaceWrapper} {
				height: 0;
			}
		}
	}
`
