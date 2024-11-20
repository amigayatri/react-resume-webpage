"use client"

import styled from "styled-components"
import { media } from "../../../../../../constants/medias"

export const HeaderWrapper = styled.div`
	padding: 16px 0 0;
`

export const Title = styled.h1<{ $accentColor?: string }>`
	font-size: 2rem;
	margin: 0;
	color: ${({ theme, $accentColor }) =>
		$accentColor === undefined ? theme.accent : $accentColor};
	margin-bottom: 16px;
	${media.max.sm} {
		font-size: 1.75rem;
	}
`

export const Artist = styled.h2`
	color: ${({ theme }) => theme.primary};
	font-size: 1.75rem;
	${media.max.sm} {
		font-size: 1.5rem;
	}
`

export const Audio = styled.audio``

export const ControlWrapper = styled.div<{
	$accentColor?: string
}>`
	background-color: ${({ theme }) => theme.background};
	border-top-right-radius: 32px;
	border-top-left-radius: 16px;
	padding: 12px 24px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 32px;
	border: 2px solid ${({ theme }) => theme.primary};
	border-color: ${({ theme, $accentColor }) =>
		$accentColor === undefined ? theme.accent : $accentColor};
`