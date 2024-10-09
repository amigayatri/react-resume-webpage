import styled from "styled-components"
import { IconWrapper } from "../../../../icons/Styles"
import media from "../../../../constants/medias"

export const DetailMessage = styled.h3`
	font-size: 1.5rem;
	display: inline;
	margin-left: 8px;
	color: ${({ theme }) => theme.colors.neutral.white};
`
export const Success = styled(DetailMessage)`
	color: ${({ theme }) => theme.colors.base.purple};
`

export const DetailedBadgeWrapper = styled.div`
	height: 256px;
	width: 320px;
	padding: 32px;
	margin: 32px auto;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.colors.neutral.almostBlack};
	color: ${({ theme }) => theme.colors.neutral.white};
	& ${IconWrapper} {
		display: inline-block;
	}

	${media.max.xs} {
		width: 256px;
	}
`
