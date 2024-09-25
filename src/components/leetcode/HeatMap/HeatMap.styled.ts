import styled from "styled-components"
import media from "../../../constants/medias"

export const HeatMapWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	${media.max.sm} {
		grid-template-columns: repeat(1, 1fr);
	}
	${media.max.xl} {
		grid-template-columns: repeat(2, 1fr);
	}
`
