"use client"

import styled from "styled-components"

export const DetailedIconWrapper = styled.section`
	text-align: center;
`
export const Title = styled.h1`
	margin: 16px 0;
	font-size: 3rem;
	color: ${({ theme }) => theme.accent};
`

export const IconWrapper = styled.div`
	margin: 16px 0;
	width: 100%;
	color: ${({ theme }) => theme.accent};
	border: 4px solid ${({ theme }) => theme.secondAccent};
	border-radius: 16px;
`
