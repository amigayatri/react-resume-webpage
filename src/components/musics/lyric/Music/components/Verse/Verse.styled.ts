"use client"

import styled from "styled-components"

export const VerseWrapper = styled.ul<{ $accentColor?: string }>`
	list-style: none;
	padding: 0;
	height: 320px;
	padding: 16px 0;
	font-size: 1.5rem;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-style: italic;
	color: ${({ theme }) => theme.white};
`
export const Line = styled.li``

export const ChorusWrapper = styled(VerseWrapper)`
	color: ${({ theme, $accentColor }) =>
		$accentColor === undefined ? theme.accent : $accentColor};
	font-size: 1.75rem;
`
