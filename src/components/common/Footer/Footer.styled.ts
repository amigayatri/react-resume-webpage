import styled from "styled-components";
import media from "../../../constants/medias"

export const FooterWrapper = styled.footer`
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	border-top: 1px solid ${({ theme }) => theme.white};
	width: 100%;
	padding: 16px;
	text-align: center;

	${media.print} {
		display: none;
	}
`

export const Name = styled.span`
    color: ${({theme}) => theme.secondAccent};
`

export const Link = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.accent};
`