"use client"

import styled from "styled-components"

export const MainWrapper = styled.main`
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	padding: 0 var(--color-container) 64px;
	min-height: 90vh;
`
