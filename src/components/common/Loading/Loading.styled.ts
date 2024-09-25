import styled from "styled-components"
import media from "../../../constants/medias"

export const LoadingWrapper = styled.section`
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 94px);
	display: flex;
	justify-content: center;
	align-items: center;

	${media.max.md} {
		min-height: calc(100vh - 134px);
	}
`
