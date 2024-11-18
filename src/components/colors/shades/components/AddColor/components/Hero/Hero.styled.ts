"use client"

import styled from "styled-components"

export const HeroWrapper = styled.section`
	margin: 0 calc(var(--color-container) * -1);
	padding: 32px var(--color-container);
	position: relative;
	text-align: center;
	background-color: ${({ theme }) => theme.almostBlack};
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	border-radius: 0 0 32px 32px;
`

export const Title = styled.h1`
	margin: 0;
	line-height: 1;
	color: ${({ theme }) => theme.accent};
	font-size: 2.5rem;
	font-family: ${({ theme }) => theme.fonts.title},
		${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
`

export const SubHeading = styled.p`
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	color: ${({ theme }) => theme.white};
	font-weight: 500;
	margin: 24px 0 0;
	line-height: 1;
	font-size: 1.25rem;
`

export const Steps = styled.strong`
	color: ${({ theme }) => theme.purple};
`

export const Button = styled.span`
	color: ${({ theme }) => theme.red};
	cursor: pointer;
	font-weight: 700;
`
export const Disclaimer = styled.span`
	display: inline-block;
	color: ${({ theme }) => theme.purple};
	font-weight: 500;
	font-size: 1rem;
	margin-top: 1rem;
`
