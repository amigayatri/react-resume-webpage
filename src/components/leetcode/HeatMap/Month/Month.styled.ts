import styled from "styled-components"
import media from "../../../../constants/medias"

export const MonthWrapper = styled.section``

export const DaysWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 64px);
	${media.max.md} {
		grid-template-columns: repeat(7, 48px);
	}
	${media.max.sm} {
		grid-template-columns: repeat(7, 32px);
	}
	grid-column-gap: 8px;
	grid-row-gap: 8px;
	width: fit-content;
`
