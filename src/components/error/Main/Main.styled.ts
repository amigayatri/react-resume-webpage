import styled from "styled-components"
import { Icon } from "../../../icons/Styles"
import media from "../../../constants/medias"

export const MainWrapper = styled.section`
	color: ${({ theme }) => theme.colors.base.pink};
	background-color: ${({ theme }) => theme.colors.neutral.almostBlack};
	width: 100%;
	min-height: var(--fullpage);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 var(--color-container);
`
export const IconsWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.colors.base.pink};

	${media.max.md} {
		& ${Icon} {
			width: 80px;
			height: 80px;
		}
	}

	${media.max.xs} {
		flex-direction: column;
	}
`
