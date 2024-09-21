import styled from "styled-components"

export const HeaderWrapper = styled.header`
	padding: 32px var(--color-container);
	position: relative;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.neutral.almostBlack};
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
	border-radius: 0 0 32px 32px;
`

export const Title = styled.h1`
	margin: 0;
	line-height: 1;
	font-size: 2.5rem;
	color: ${({ theme }) => theme.colors.base.pink};
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
`

export const SubHeading = styled.summary`
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
	color: ${({ theme }) => theme.colors.base.blue};
	margin: 8px 0 0;
	line-height: 1;
`
