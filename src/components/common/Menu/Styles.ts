import styled from "styled-components"

export const MenuWrapper = styled.nav`
	background-color: #212117;
	color: #f7f7f7;
	padding: 8px var(--container);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	@media print {
		display: none;
	}
`

export const SettingsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`

export const LanguageSelect = styled.select`
	font-size: 1.25rem;
	background-color: #212117;
	color: #f7f7f7;
	border-color: #212117;
	@media (max-width: 800px) {
		max-width: 200px;
	}
`

export const LanguageOption = styled.option``
