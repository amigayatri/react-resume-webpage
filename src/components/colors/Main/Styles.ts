import styled from "styled-components"

export const MainWrapper = styled.main`
	font-family: "Fira Code", monospace;
	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.background};
	padding: 0 var(--color-container) 64px;
	min-height: 90vh;
`

export const SectionTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-family: "Fira Code", monospace;
	margin-top: 0;
`