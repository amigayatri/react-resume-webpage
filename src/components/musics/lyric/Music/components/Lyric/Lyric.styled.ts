"use client"

import styled from "styled-components"

export const LyricWrapper = styled.div<{ $accentColor?: string }>`
	height: 100%;
	min-height: 340px;
	padding: 10px 12px;
	transition: ${({ theme }) => theme.transition};
	border-bottom-left-radius: 32px;
	border-bottom-right-radius: 16px;
	background-color: ${({ theme }) => theme.background};
	border: 2px solid
		${({ theme, $accentColor }) =>
			$accentColor === undefined ? theme.accent : $accentColor};
	border-top: none;
`

export const LyricContentWrapper = styled.div<{ $accentColor?: string }>`
	overflow-y: auto;
	overflow-x: hidden;
	height: 100%;
	min-height: 320px;

	${({ theme, $accentColor }) =>
		theme.getScroll(
			theme.background,
			$accentColor === undefined ? theme.accent : $accentColor,
			theme.primary,
			true
		)}
`

export const PlayingOffset = styled.div`
	height: 320px;
	min-height: var(--fullpage);
	width: 100%;
`
