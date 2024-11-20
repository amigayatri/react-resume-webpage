"use client"

import styled from "styled-components"

export const Letter = styled.div`
	background-color: transparent;
	border-style: solid;
	border-width: 0;
	border-left: none;
	border-right: none;
	position: relative;
	display: inline-block;
	line-height: 1.6;
	padding: 0 0.1em;
	text-align: center;

	&.legible {
	}
	&.icon {
		padding: 0.2em;
	}
	&.legible:first-of-type {
		border-left-style: solid;
	}
	&.legible:last-of-type {
		border-right-style: solid;
	}
	&:first-of-type {
		border-radius: 4px 0 0 4px;
	}
	&:last-of-type {
		border-radius: 0 4px 4px 0;
	}
`
export const LetterWrapper = styled.span``
export const Multicolor = styled.div<{ $isLegible: boolean }>`
	width: fit-content;
	display: inline-flex;
	text-wrap: ${({ $isLegible }) => ($isLegible ? "nowrap" : "unset")};
`
