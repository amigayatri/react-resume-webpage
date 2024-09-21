import styled from "styled-components"

export const ToggleWrapper = styled.div`
	display: flex;
	width: 44px;
	min-width: 44px;
	height: 32px;
	position: relative;
	background-color: #212117;
	border: solid 2px ${({ theme }) => theme.accent};
	border-radius: 16px;
	margin-left: 16px;
`
