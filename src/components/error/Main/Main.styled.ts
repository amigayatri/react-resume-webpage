import styled from "styled-components"
import { Icon } from "../../../icons/Styles"
import media from "../../../constants/medias"

export const MainWrapper = styled.main`
	color: ${({ theme }) => theme.pink};
	background-color: ${({ theme }) => theme.background};
	width: 100%;
	min-height: var(--fullpage);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 var(--color-container);
`
export const BlueWrapper = styled.div`
	color: ${({ theme }) => theme.accent};
`
export const PinkWrapper = styled.div`
	color: ${({ theme }) => theme.secondAccent};
`

export const IconsWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.pink};

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
