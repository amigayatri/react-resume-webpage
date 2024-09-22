import styled from "styled-components"
import media from "../../../constants/medias"

export const DesktopNavigationWrapper = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: space-between;
	padding-left: 0;

	${media.max.md} {
		display: none;
	}
`

export const MobileToggle = styled.button``

export const MobileWrapper = styled.ul``
