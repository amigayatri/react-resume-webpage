"use client"

import styled from "styled-components"

export const LyricWrapper = styled.div`
	height: 100%;
	min-height: 340px;
	padding: 10px 0;
	transition: ${({ theme }) => theme.transition};
	border-bottom-left-radius: 32px;
	border-bottom-right-radius: 16px;
	background-color: ${({ theme }) => theme.almostBlack};
	padding-right: 16px;
	border: 2px solid ${({ theme }) => theme.white};
	border-top: none;
`

export const LyricContentWrapper = styled.div<{ $accentColor?: string }>`
	overflow: auto;
	height: 100%;
	min-height: 320px;

	${({ theme, $accentColor }) =>
		theme.getScroll(
			theme.almostBlack,
			$accentColor === undefined ? theme.accent : $accentColor,
			theme.white,
			true
		)}
`

export const PlayingOffset = styled.div`
	height: 320px;
	min-height: var(--fullpage);
	width: 100%;
`
