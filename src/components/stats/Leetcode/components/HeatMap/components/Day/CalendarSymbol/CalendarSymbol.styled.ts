"use client"

import styled from "styled-components"
import {
	Header,
	Line,
	Spiral,
	Day
} from "./components/CalendarHeader/CalendarHeader.styled"
import {
	Exercises,
	ExercisesWrapper
} from "./components/CalendarPage/CalendarPage.styled"
import {
	FaceWrapper,
	Eyes,
	Smile,
	SadMouth
} from "./components/Face/Face.styled"

export const CalendarSymbolWrapper = styled.div<{ $color: string }>`
	width: 64px;
	height: 64px;
	border-radius: 16px;
	border: ${({ $color, theme }) => $color || theme.primary};
	border-width: 8px;
	border-style: solid;

	& ${Header} {
		& ${Line} {
			border-bottom-color: ${({ $color, theme }) => $color || theme.primary};
		}

		& ${Spiral} {
			background-color: ${({ $color, theme }) => $color || theme.primary};
		}
	}
	& ${FaceWrapper} {
		${Eyes} {
			background-color: ${({ $color, theme }) => $color || theme.primary};
		}
		${Smile}, ${SadMouth} {
			background-color: ${({ $color, theme }) => $color || theme.primary};
		}
		border-bottom-color: ${({ $color, theme }) => $color || theme.primary};
	}
	& ${Exercises} {
		background-color: ${({ $color, theme }) => $color || theme.primary};
	}
`
export { Exercises, ExercisesWrapper, FaceWrapper, Day }
