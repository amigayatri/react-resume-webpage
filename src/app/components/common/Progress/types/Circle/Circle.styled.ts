"use client"

import styled from "styled-components"
import { Label, ProgressTitle } from "../../Progress.styled"

export const CircleInfo = styled.span`
	color: ${({ theme }) => theme.primary};
	opacity: 0.7;
	transition: ${({ theme }) => theme.transition};
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Circle = styled.div<{
	$percentage: number
	$color: {
		done: string
		total: string
	}
	$size?: number
}>`
	width: ${({ $size }) => $size || 128}px;
	height: ${({ $size }) => $size || 128}px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: radial-gradient(
			closest-side,
			${({ theme }) => theme.background} 74%,
			transparent 75% 100%,
			${({ theme }) => theme.background} 0
		),
		conic-gradient(
			${({ $color, $percentage }) =>
					$color.done + "80 " + $percentage + "%, " + $color.total + "14"}
				0
		);

	&:hover,
	&:focus {
		& ${CircleInfo} {
			opacity: 1;
		}
		background: radial-gradient(
				closest-side,
				${({ theme }) => theme.background} 74%,
				transparent 75% 100%,
				${({ theme }) => theme.background} 0
			),
			conic-gradient(
				${({ $color, $percentage }) =>
						$color.done + "FF " + $percentage + "%, " + $color.total + "14"}
					0
			);
	}
`

export const CircleDoneLabel = styled(Label)`
	color: ${({ $color, theme }) => $color || theme.accent};
	font-size: 1.5rem;
`

export const CircleTotalLabel = styled(Label)`
	border-top: 2px solid ${({ $color, theme }) => $color || theme.primary};
`

export const CircleTitle = styled(ProgressTitle)<{ $color: string }>`
	color: ${({ $color, theme }) => $color || theme.accent};
	text-wrap: nowrap;
`
