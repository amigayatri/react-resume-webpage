import styled from "styled-components"

export const MenuWrapper = styled.nav`
	background-color: #212117;
	color: #f7f7f7;
	padding: 8px var(--container);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	height: 40px;

	@media print {
		display: none;
	}
`

export const LanguageSelect = styled.select`
	font-size: 1.25rem;
	background-color: #212117;
	color: #f7f7f7;
	border-color: #212117;
`

export const IconWrapper = styled.span`
	width: 24px;
	height: 24px;
	margin: 2px;
	display: inline-block;
	padding: 4px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.primary};
	z-index: 5;

	&.light {
		transform: translate(12px);
	}
`

export const ToggleWrapper = styled.div`
	display: flex;
	width: 44px;
	height: 32px;
	position: relative;
	background-color: ${({ theme }) => theme.background};
	border: solid 2px #74705D;
	border-radius: 16px;
	margin-left: 16px;
`

export const LanguageOption = styled.option``