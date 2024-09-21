import styled from "styled-components"
import { Link } from "react-router-dom"

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
