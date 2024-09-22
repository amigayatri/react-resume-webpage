import styled from "styled-components"
import media from "../../../constants/medias"

export const NavigationWrapper = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: space-between;
	padding-left: 0;
	margin: 0;

	${media.max.md} {
		position: absolute;
		bottom: 8px;
		left: 32px;
	}
`

export const MobileToggle = styled.button``

export const MobileWrapper = styled.ul``
