"use client"

import styled from "styled-components"
import { ProgressWrapper } from "../../../../../common/Progress/Progress.styled"
import { media } from "../../../../../../constants/medias"

export const ProgressBarsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, calc(50% - 8px));
	gap: 16px;
	width: 100%;
	margin: 0 auto;
	padding: 16px 0;
	${media.max.sm} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	${media.max.md} {
		grid-template-columns: repeat(2, 320px);
		width: fit-content;
		max-width: 100%;
		margin: 0 auto;
		overflow-x: auto;
	}
	& ${ProgressWrapper} {
		min-width: 320px;
		width: 100%;
	}
`
