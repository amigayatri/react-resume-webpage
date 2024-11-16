"use client"

import styled from "styled-components"

export const Wrapper = styled.section`
	padding: 32px 0;
	font-size: 1.25rem;
`

export const ListWrapper = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
`

export const PairWrapper = styled.li<{ $isActive: boolean }>`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.accent};
	padding: 8px;
	border-radius: 8px;
	margin: 8px 16px;
	margin-right: 8px;
	cursor: ${({ $isActive }) => ($isActive ? "pointer" : "not-allowed")};
`

export const Target = styled.span`
	border: 2px solid currentColor;
	padding: 8px 4px;
`
