"use client"

import styled from "styled-components"

export const ControlWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
`

export const Button = styled.div``

export const ButtonLabel = styled.span`
	margin-left: 16px;
`

export const BackButton = styled.a`
	text-decoration: none;
	display: inline-flex;
	justify-content: center;
	width: fit-content;
	align-items: center;
	font-weight: 700;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.background};
	padding: 4px 12px;
	background-color: ${({ theme }) => theme.primary};
	border: 4px solid ${({ theme }) => theme.secondAccent};
	border-radius: 16px;
`
