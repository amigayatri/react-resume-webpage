"use client"

import styled from "styled-components"

export const Wrapper = styled.li`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: space-evenly;
	min-width: 120px;
	border: 2px solid ${({ theme }) => theme.primary};
	padding: 4px;
	margin: 8px 8px 0 0;
	border-radius: 4px;
`

export const ColorTag = styled.code`
	font-weight: 700;
	font-size: 1.5rem;
`
