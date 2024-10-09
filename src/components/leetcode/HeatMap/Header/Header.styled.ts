import styled from "styled-components"
import media from "../../../../constants/medias"

export const HeaderWrapper = styled.div`
	height: 80px;
	position: absolute;
	top: 16px;
	width: calc(100% - 32px);
	left: 16px;

	${media.max.xs} {
		height: 160px;
	}
`

export const ButtonsWrapper = styled.div`
	width: 100%;
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
