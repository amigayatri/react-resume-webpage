import styled from "styled-components"

export const ButtonStyle = styled.span`
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.background};
	font-weight: 600;
	padding: 8px;
	border-radius: 8px;
`
