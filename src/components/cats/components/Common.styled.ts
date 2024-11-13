"use client"

import styled from "styled-components"

export const Button = styled.button`
	transition: ${({ theme }) => theme.transition};
	min-width: 196px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	border-radius: 16px;
	border: none;
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.secondAccent};
	border: 4px solid ${({ theme }) => theme.secondAccent};
	&:nth-of-type(even) {
		background-color: ${({ theme }) => theme.secondAccent};
		color: ${({ theme }) => theme.accent};
		border-color: ${({ theme }) => theme.accent};
	}
`
