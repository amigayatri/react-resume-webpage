import styled from "styled-components"

export const Letter = styled.span`
	background-color: ${({ theme }) => theme.background};
	border-style: solid;
	border-width: 0;
	border-left: none;
	border-right: none;
	&:first-of-type {
		border-left-style: solid;
		border-radius: 4px 0 0 4px;
	}
	&:last-of-type {
		border-right-style: solid;
		border-radius: 0 4px 4px 0;
	}
`
export const LetterWrapper = styled.span``
export const Multicolor = styled.span<{ $isLegible: boolean }>`
	width: fit-content;
	display: inline-block;
	text-wrap: ${({ $isLegible }) => ($isLegible ? "nowrap" : "unset")};
`
