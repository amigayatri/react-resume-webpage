import styled from "styled-components"

export const LanguageSelectInput = styled.select`
	font-size: 1.25rem;
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	border-color: ${({ theme }) => theme.black};
`

export const LanguageOption = styled.option`
	text-transform: capitalize;
`
