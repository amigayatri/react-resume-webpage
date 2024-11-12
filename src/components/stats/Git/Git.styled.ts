"use client"

import styled from "styled-components"

export const GitWrapper = styled.div`
	background-color: ${({ theme }) => theme.almostBlack};
	border: 2px solid ${({ theme }) => theme.white};
	margin: 8px 8px;
	padding: 16px calc(var(--color-container) - 8px);
	border-radius: 16px;
	${({ theme }) => theme.getScroll(theme.almostBlack, theme.pink, theme.purple)}
`
