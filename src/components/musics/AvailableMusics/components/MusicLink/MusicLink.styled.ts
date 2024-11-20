"use client"

import styled from "styled-components"

export const MusicButton = styled.div<{ $accentColor?: string }>`
	background-color: ${({ theme, $accentColor }) =>
		$accentColor === undefined ? theme.accent : $accentColor};
	color: ${({ theme }) => theme.background};
	border-radius: 16px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Link = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.background};
	font-size: 1.5rem;
	font-weight: 700;
`
