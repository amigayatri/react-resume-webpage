"use client"

import styled from "styled-components"
import { media } from "../../../../constants/medias"

export const ProfileWrapper = styled.section`
	padding: 0 var(--container);
	display: flex;
	justify-content: center;
	align-items: center;
	${media.max.md} {
		flex-direction: column;
	}
`

export const IDWrapper = styled.a`
	color: ${({ theme }) => theme.accent};
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	width: fit-content;
`

export const Name = styled.h1`
	font-size: 2rem;
	color: ${({ theme }) => theme.accent};
	margin: 0;
	text-align: center;
`
export const Username = styled.h2`
	font-size: 1.75rem;
	text-align: center;
	color: ${({ theme }) => theme.primary};
	margin: 0;
`

export const FlagWrapper = styled.div`
	font-size: 1.5rem;
	margin: 0 16px;
	${media.max.md} {
		margin: 8px 0;
	}
`
