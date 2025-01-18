"use client"

import styled from "styled-components"

export const Button = styled.button`
	margin: 24px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px 8px;
	border-radius: 8px;
	border: none;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid currentColor;
	flex: 1;
`
export const OpenText = styled.span`
	text-transform: capitalize;
	padding-left: 8px;
	font-weight: 700;
	transition: ${({ theme }) => theme.transition};
`
