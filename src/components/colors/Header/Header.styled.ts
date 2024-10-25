import styled from "styled-components"

export const HeaderWrapper = styled.header`
	padding: 32px var(--color-container);
	position: relative;
	text-align: center;
	background-color: ${({ theme }) => theme.almostBlack};
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	border-radius: 0 0 32px 32px;
`

export const Title = styled.h1`
	margin: 0;
	line-height: 1;
	color: ${({ theme }) => theme.blue};
	font-family: ${({ theme }) => theme.fonts.title},
		${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
`

export const SubHeading = styled.p`
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	color: ${({ theme }) => theme.purple};
	font-weight: 500;
	margin: 8px 0 0;
	line-height: 1;
`
