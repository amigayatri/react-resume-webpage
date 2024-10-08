import styled from "styled-components"
import media from "../../../../constants/medias"

export const HeaderWrapper = styled.div``

export const ButtonsWrapper = styled.div`
	max-width: calc(100vw - 2 * (var(--container)) - 32px);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;

	${media.max.sm} {
		flex-direction: column;
		align-items: flex-start;
	}
`
