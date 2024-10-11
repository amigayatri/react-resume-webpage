import styled from "styled-components"
import media from "../../../constants/medias"

export const VisitorStatsWrapper = styled.section``

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;

	${media.max.sm} {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
`

export const MainWrapper = styled.div`
	flex: 2;
	min-width: 196px;
	max-width: auto;
	${media.max.sm} {
		width: 100%;
		max-width: 512px;
	}
`

export const SourceLink = styled.a`
	text-decoration: dotted;
	color: ${({ theme }) => theme.accent};
`

export const SideWrapper = styled.div`
	min-width: 320px;
	min-height: 320px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	margin-left: 32px;

	${media.max.sm} {
		margin-left: 0;
		margin-bottom: 32px;
		flex-direction: column-reverse;
	}
	${media.max.xs} {
		scale: 0.9;
	}
`
export const SideMapContainer = styled.div`
	margin: 32px 0;
	width: 100%;
`
