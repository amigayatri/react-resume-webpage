import styled from "styled-components"
import media from "../../../constants/medias"

export const MenuWrapper = styled.nav`
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	padding: 8px var(--color-container);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	width: 100vw;
	z-index: 5000;
	top: 0;

	${media.print} {
		display: none;
	}
`

export const SettingsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
`

export const LanguageSelect = styled.select`
	font-size: 1.25rem;
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	border-color: ${({ theme }) => theme.black};
	${media.max.md} {
		max-width: 200px;
	}
`

export const LanguageOption = styled.option``
