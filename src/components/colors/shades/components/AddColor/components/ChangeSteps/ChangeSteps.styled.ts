"use client"

import styled from "styled-components"

export const Input = styled.input`
	background-color: ${({ theme }) => theme.almostBlack};
	font-size: 1.5rem;
	color: ${({ theme }) => theme.accent};
	padding: 8px;
	border-radius: 4px;
	border: 2px solid ${({ theme }) => theme.primary};
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
`
