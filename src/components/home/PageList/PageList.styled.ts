"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const Wrapper = styled.section`
	padding: 32px 0;
`

export const ListWrapper = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 32px;
	grid-template-rows: 1fr;
	${media.max.sm} {
		grid-template-columns: 1fr;
	}
	${media.min.md} {
		width: 672px;
		margin: 0 auto;
	}
	${media.min.lg} {
		width: 984px;
	}
`
