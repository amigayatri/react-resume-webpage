import { Link } from "react-router-dom"
import styled from "styled-components"

export const DesktopWrapper = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: space-between;
	padding-left: 0;

	@media (max-width: 768px) {
		display: none;
	}
`

export const MobileToggle = styled.button``

export const MobileWrapper = styled.ul``

export const LinkWrapper = styled.li`
	margin: 0;
	margin-left: 32px;
	&:first-of-type {
		margin-left: 0;
	}
`

export const LinkNav = styled(Link)<{ $isActive: boolean }>`
	color: ${({ theme, $isActive }) =>
		$isActive ? theme.secondAccent : theme.accent};
	text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};
	font-weight: ${({ $isActive }) => ($isActive ? "700" : "400")};
	padding: 4px;
	text-wrap: nowrap;
	display: block;
`
