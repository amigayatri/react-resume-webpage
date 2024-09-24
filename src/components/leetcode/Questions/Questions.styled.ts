import styled from "styled-components"
import media from "../../../constants/medias"

export const QuestionsWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 32px;

	${media.max.md} {
		flex-direction: column;
	}
`

export const QuestionsDetailsWrapper = styled.div`
	width: 100%;
	margin-left: 64px;

	${media.max.md} {
		margin-left: 0;
		margin-top: 32px;
	}
`
