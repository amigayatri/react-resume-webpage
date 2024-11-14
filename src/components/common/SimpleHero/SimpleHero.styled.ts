"use client"

import styled from "styled-components"

export const HeroWrapper = styled.section`
	padding: 32px var(--color-container);
	margin: 0 calc(var(--color-container) * -1);
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
	font-size: 2.5rem;
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
`

export const Text = styled.p`
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	color: ${({ theme }) => theme.white};
	margin: 8px 0 0;
	line-height: 1;
`
