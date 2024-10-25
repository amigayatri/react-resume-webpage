import styled from "styled-components"

export const PaletteAnchorsWrapper = styled.section``
export const AnchorList = styled.ul`
	list-style: none;
	padding: 0;
`
export const Item = styled.li`
	margin: 8px 16px;
	margin-left: 0;
	display: inline-block;
	height: 48px;
	width: fit-content;
	&:last-of-type {
		margin-right: 0;
	}
`
export const Anchor = styled.a`
	display: inline-block;
	font-weight: 700;
	font-size: 1.25rem;
	text-decoration: none;
	color: ${({ theme }) => theme.accent};
`
