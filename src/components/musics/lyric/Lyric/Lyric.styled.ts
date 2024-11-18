"use client"

import styled from "styled-components"

export const MusicWrapper = styled.section`
	padding-bottom: 16px;
	text-align: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: calc(var(--fullpage) - 64px);
	position: relative;
`

export const LyricWrapper = styled.div`
	height: fit-content;
	max-height: 100%;
	overflow: auto;
	transition: ${({ theme }) => theme.transition};
	${({ theme }) =>
		theme.getScroll(theme.almostBlack, theme.blue, theme.white, true)}
`

export const HeaderWrapper = styled.div`
	padding: 16px 0 32px;
`

export const Title = styled.h1`
	font-size: 2.5rem;
	margin: 0;
	color: ${({ theme }) => theme.accent};
	margin-bottom: 16px;
`

export const Artist = styled.h2`
	color: ${({ theme }) => theme.primary};
	font-size: 2rem;
`
export const Verse = styled.ul`
	list-style: none;
	padding: 0;
	margin: 16px 0;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.primary};
`
export const Line = styled.li``

export const Chorus = styled(Verse)`
	color: ${({ theme }) => theme.accent};
	font-size: 1.75rem;
`

export const Summary = styled.p`
	font-size: 1.25rem;
`

export const IconList = styled.div`
	display: flex;
	justify-content: center;
`
export const Icon = styled.span`
	margin: 8px;
`
