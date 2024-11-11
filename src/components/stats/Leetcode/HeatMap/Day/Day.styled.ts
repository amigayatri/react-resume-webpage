"use client"

import styled from "styled-components"
import { media } from "../../../../../constants/medias"

import {
	CalendarSymbolWrapper,
	Exercises,
	ExercisesWrapper,
	FaceWrapper,
	Day
} from "./CalendarSymbol/CalendarSymbol.styled"

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

export const SimpleDay = styled.span<{ $color: string }>`
	display: inline-block;
	background-color: ${({ $color }) => $color || "#000000"};
	height: 12px;
	width: 12px;
	border-radius: 6px;
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
			scale: 0.4;
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
				scale: 0.6;
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
