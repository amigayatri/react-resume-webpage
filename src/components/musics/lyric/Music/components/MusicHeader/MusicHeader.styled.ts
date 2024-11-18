"use client"

import styled from "styled-components"

export const HeaderWrapper = styled.div`
	padding: 16px 0 0;
`

export const Title = styled.h1<{ $accentColor?: string; $addFilter: boolean }>`
	font-size: 2.5rem;
	margin: 0;
	color: ${({ theme, $accentColor }) =>
		$accentColor === undefined ? theme.accent : $accentColor};
	margin-bottom: 16px;
	filter: ${({ $addFilter, theme }) =>
		$addFilter
			? theme.primary === theme.almostBlack
				? "brightness(0.5)"
				: "brightness(1.5)"
			: "none"};
`

export const Artist = styled.h2`
	color: ${({ theme }) => theme.primary};
	font-size: 2rem;
`

export const ControlWrapper = styled.div<{
	$accentColor?: string
	$addFilter: boolean
}>`
	background-color: ${({ theme }) => theme.almostBlack};
	border-top-right-radius: 32px;
	border-top-left-radius: 16px;
	padding: 12px 24px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 32px;
	border: 2px solid ${({ theme }) => theme.white};
	border-bottom-color: ${({ theme, $accentColor }) =>
		$accentColor === undefined ? theme.accent : $accentColor};
`
