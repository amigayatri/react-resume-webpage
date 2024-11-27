"use client"

import styled from "styled-components"

export const HeroWrapper = styled.section`
	padding: 32px 0;
`

export const Title = styled.h1`
	color: ${({ theme }) => theme.accent};
	margin-bottom: 32px;
	max-width: 100%;
	overflow-x: auto;
	font-size: 2rem;
`
