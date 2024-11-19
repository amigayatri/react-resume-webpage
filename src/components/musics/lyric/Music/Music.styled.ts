"use client"

import styled from "styled-components"
import { media } from "../../../../constants/medias"

export const MusicWrapper = styled.section`
	padding-bottom: 16px;
	text-align: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: calc(var(--fullpage) - 64px);

	position: relative;
	${media.max.sm} {
		height: 100vh;
	}
`
