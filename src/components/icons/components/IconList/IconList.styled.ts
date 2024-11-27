"use client"

import styled from "styled-components"

export const IconListWrapper = styled.section``

export const List = styled.ul<{ $cols: number; $size: number }>`
	display: grid;
	list-style: none;
	grid-template-columns: repeat(
		${({ $cols }) => $cols},
		${({ $size }) => $size + 32}px
	);
	gap: 16px;
	width: 100%;
	justify-content: center;
`

export const Disclaimer = styled.span``