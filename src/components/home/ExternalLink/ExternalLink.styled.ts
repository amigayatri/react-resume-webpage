import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.li`
	margin: 0 auto;
	width: 100%;
	@media (min-width: 768px) {
	}
	@media (min-width: 1366px) {
		width: 480px;
	}
`

export const ButtonStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 24px 32px;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.accent};

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`

export const LinkExternal = styled.a`
	color: ${({ theme }) => theme.background};
	text-decoration: none;
	font-size: 1.25rem;
`

export const LinkInternal = styled(Link)`
	color: ${({ theme }) => theme.background};
	text-decoration: none;
	font-size: 1.25rem;
`

export const Label = styled.span`
	text-align: center;
	margin-left: 8px;
`
