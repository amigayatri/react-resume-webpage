"use client"

import styled from "styled-components"

export const Input = styled.textarea`
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.purple};
	resize: none;
	width: 100%;
	height: 196px;
	text-transform: uppercase;
	border: 2px solid ${({ theme }) => theme.primary};
	box-sizing: border-box;
	border-radius: 4px;
	padding: 8px;
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
`
