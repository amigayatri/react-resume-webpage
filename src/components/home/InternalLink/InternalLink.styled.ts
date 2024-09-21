import styled from "styled-components"
import { Link } from "react-router-dom"

export const InternalLinkTag = styled(Link)`
	color: ${({ theme }) => theme.background};
	text-decoration: none;
	font-size: 1.25rem;
	margin: 0 auto;
	width: 100%;

	@media (min-width: 1366px) {
		width: 480px;
	}
`
