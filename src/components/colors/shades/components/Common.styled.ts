"use client"

import styled from "styled-components"
import { media } from "../../../../constants/medias"

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

export const SubHeadingWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	${media.max.md} {
		flex-direction: column;
	}
`