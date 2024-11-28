"use client"

import styled from "styled-components"

export const Button = styled.div`
	cursor: pointer;
	margin: 16px auto;
	display: flex;
	justify-content: flex-start;
	width: 100%;
	max-width: 560px;
	align-items: center;
	border: 4px solid ${({ theme }) => theme.blue};
	background-color: ${({ theme }) => theme.pink};
	color: ${({ theme }) => theme.blue};
	font-size: 1.25rem;
	text-transform: capitalize;
	border-radius: 16px;
	padding: 4px 8px;
`
export const ButtonIcon = styled.div`
	margin-left: 8px;
	display: block;
	height: 48px;
	width: 48px;
	&:first-of-type {
		margin-left: 0;
	}
`
export const ButtonLabel = styled.span`
	margin-left: 8px;
	font-weight: 700;
	color: ${({ theme }) => theme.almostBlack};
`
