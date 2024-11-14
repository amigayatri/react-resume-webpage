"use client"

import styled from "styled-components"

export const SectionTitle = styled.h2`
	color: ${({ theme }) => theme.pink};
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	margin-top: 0;
`

export const SubHeading = styled.p`
	font-size: 1.125rem;
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
`
