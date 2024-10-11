import styled from "styled-components"

export const GitDateWrapper = styled.div`
	list-style: none;
	padding: 0;
	color: ${({ theme }) => theme.colors.neutral.white};
	background-color: ${({ theme }) => theme.colors.neutral.almostBlack};
	border-radius: 0;
	&:first-of-type {
		padding-top: 32px;
		border-top-right-radius: 16px;
		border-top-left-radius: 16px;
	}
	&:last-of-type {
		padding-bottom: 32px;
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
	}
`

export const Date = styled.h3`
	margin-left: 32px;
`
