import styled from "styled-components"
import media from "../../../constants/medias"

export const BadgeListWrapper = styled.section`
	max-width: 480px;
	margin: 0 auto;
	padding: 32px 0;
`

export const BadgesWrapper = styled.div`
	display: grid;
	grid-gap: 32px;
	grid-template-columns: repeat(4, 96px);
	margin: 32px auto 0;
	width: fit-content;

	${media.max.sm} {
		grid-template-columns: repeat(3, 96px);
	}
	${media.max.xs} {
		grid-template-columns: repeat(2, 96px);
	}
`
