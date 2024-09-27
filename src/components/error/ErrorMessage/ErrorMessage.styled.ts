import styled from "styled-components"
import media from "../../../constants/medias"

export const ErrorMessageWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	${media.max.xs} {
		flex-direction: column;
	}
`

export const Message = styled.h1`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.neutral.white};
	margin-left: 16px;
	${media.max.sm} {
		margin-left: 16px;
		max-width: 60%;
	}
	${media.max.xs} {
		margin-left: 0;
		max-width: 100%;
	}
`
