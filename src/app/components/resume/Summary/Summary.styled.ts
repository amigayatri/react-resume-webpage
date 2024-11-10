"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const Wrapper = styled.section`
	display: flex;
	padding: 0 var(--container) 32px;
	flex-direction: column;
	${media.print} {
		flex-direction: row;
	}
`

export const SummaryText = styled.p`
	margin: 0 16px 0 0;
	font-size: 1.25rem;
`
