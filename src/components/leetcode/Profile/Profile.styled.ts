import styled from "styled-components"
import media from "../../../constants/medias"

export const ProfileWrapper = styled.section`
	padding: 0 var(--container);
`

export const IDWrapper = styled.a`
	color: ${({ theme }) => theme.secondAccent};
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	width: 100%;
	${media.max.md} {
		flex-direction: column;
	}
`

export const Name = styled.h1`
	font-size: 2rem;
	color: ${({ theme }) => theme.accent};
	margin: 0;
`
export const Username = styled.h1`
	font-size: 1.75rem;
	color: ${({ theme }) => theme.secondAccent};
	margin: 0;
	margin-left: 16px;

	${media.max.md} {
		margin-left: 0;
		margin-top: 16px;
	}
`
