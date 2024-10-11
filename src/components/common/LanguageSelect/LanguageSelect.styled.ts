import styled from "styled-components"
import media from "../../../constants/medias"

export const LanguageSelectInput = styled.select`
	font-size: 1.25rem;
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	border-color: ${({ theme }) => theme.black};
	${media.max.sm} {
		max-width: 200px;
	}
`

export const LanguageOption = styled.option`
	text-transform: capitalize;
`
