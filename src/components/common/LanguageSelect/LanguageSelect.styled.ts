import styled from "styled-components"
import media from "../../../constants/medias"

export const LanguageSelectInput = styled.select<{ $maxWidth: string }>`
	font-size: 1.25rem;
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	border-color: ${({ theme }) => theme.black};
	${media.max.md} {
		max-width: ${({ $maxWidth }) => $maxWidth};
	}
`

export const LanguageOption = styled.option`
	text-transform: capitalize;
`
