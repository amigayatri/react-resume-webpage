"use client"

import styled from "styled-components"
import { media } from "../../../../../constants/medias"

export const MonthWrapper = styled.div`
	width: fit-content;
	margin: 0 auto;
`

export const MonthName = styled.h2`
	color: ${({ theme }) => theme.accent};
	margin: 16px 0;
`

export const MonthStartChar = styled.h2`
	color: ${({ theme }) => theme.accent};
	font-size: 1rem;
	display: inline-block;
	overflow: hidden;
	text-align: center;
`

const startCharStyle = (isSimple: boolean) => {
	if (isSimple) {
		return `
			display: block;
			height: 16px;
			width: 16px;
			margin: 2px;
		`
	} else {
		return `
			display: none;
			height: 0px;
			width: 0px;
			margin: 0;
		`
	}
}

export const DaysWrapper = styled.div<{ $isSimple: boolean }>`
	display: ${({ $isSimple }) => ($isSimple ? "flex" : "grid")};
	grid-template-columns: repeat(7, 64px);
	${media.max.md} {
		grid-template-columns: repeat(7, 56px);
	}
	${media.max.sm} {
		grid-template-columns: repeat(7, 24px);
	}
	grid-column-gap: 8px;
	grid-row-gap: 8px;
	width: fit-content;
	${MonthStartChar} {
		${({ $isSimple }) => startCharStyle($isSimple)}
	}
`
