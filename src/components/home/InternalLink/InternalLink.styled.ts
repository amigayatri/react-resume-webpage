import styled from "styled-components"
import { Link } from "react-router-dom"
import { ButtonStyle } from "../Common.styled"
import media from "../../../constants/medias"

export const InternalLinkTag = styled(Link)`
	color: ${({ theme }) => theme.secondAccent};
	text-decoration: none;
	font-size: 1.25rem;
	margin: 0 auto;
	width: 100%;
	transition: ${({ theme }) => theme.transition};

	svg {
		fill: ${({ theme }) => theme.secondAccent};
	}

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.accent};

		${ButtonStyle} {
			background-color: ${({ theme }) => theme.secondAccent};
			svg {
				fill: ${({ theme }) => theme.accent};
			}
		}
	}

	${media.min.lg} {
		width: 480px;
	}
`
