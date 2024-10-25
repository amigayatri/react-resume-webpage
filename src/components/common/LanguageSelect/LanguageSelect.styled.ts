import styled from "styled-components"
import media from "../../../constants/medias"

export const SelectWrapper = styled.div`
	position: relative;
	padding: 16px 0 8px;
`

export const Label = styled.label`
	position: absolute;
	top: 4px;
	left: 4px;
	font-weight: 700;
	color: ${({ theme }) => theme.blue};
	background-color: ${({ theme }) => theme.black};
`

export const LanguageSelectInput = styled.select`
	height: 40px;
	font-size: 1.25rem;
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	padding: 4px 8px;
	border-radius: 8px;
	border: 2px solid ${({ theme }) => theme.pink};
	${media.max.xs} {
		max-width: 200px;
	}
`

export const LanguageOption = styled.option`
	text-transform: capitalize;
`
