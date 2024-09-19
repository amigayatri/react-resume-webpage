import styled from "styled-components"

export const MainWrapper = styled.main`
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
	padding: 0 var(--color-container) 64px;
	min-height: 90vh;
`

export const SectionTitle = styled.h2`
    color: ${({ theme }) => theme.colors.base.pink};
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
	margin-top: 0;
`

export const SubHeading = styled.summary`
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
`