"use client"

import styled from "styled-components"

export const Count = styled.span`
	display: inline-block;
	overflow: hidden;
	color: ${({ theme }) => theme.accent};
	transition: ${({ theme }) => theme.transition};
`

export const Item = styled.li`
	display: inline-block;
`

export const LanguageItemWrapper = styled.span<{
	$fontSize: number
	$iconSize: number
}>`
	display: inline-flex;
	flex-direction: column;
	font-size: ${({ $fontSize }) => $fontSize}rem;
	border-radius: 16px;
	height: fit-content;
	position: relative;
	transition: ${({ theme }) => theme.transition};
	text-align: center;

	& ${Item} {
		border-radius: 16px;
		padding: 16px;
		height: fit-content;
		width: ${({ $iconSize }) => $iconSize + 32}px;
	}

	& ${Count} {
		width: fit-content;
		height: 0;
	}

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.secondAccent};
		color: ${({ theme }) => theme.accent};

		& ${Count} {
			height: ${({ $fontSize }) => $fontSize}rem;
		}
	}
`
