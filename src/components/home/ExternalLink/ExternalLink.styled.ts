import styled from "styled-components"
import { ButtonStyle } from "../Common.styled"
import media from "../../../constants/medias"

export const ExternalLinkTag = styled.a`
	color: ${({ theme }) => theme.secondAccent};
	text-decoration: none;
	font-size: 1.25rem;
	margin: 0 auto;
	width: 100%;
	transition: ${({ theme }) => theme.transition};

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.accent};

		${ButtonStyle} {
			background-color: ${({ theme }) => theme.secondAccent};
		}
	}

	${media.min.lg} {
		width: 480px;
	}
`

export const LabelWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`