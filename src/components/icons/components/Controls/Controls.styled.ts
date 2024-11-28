"use client"

import styled from "styled-components"
import { media } from "../../../../constants/medias"

export const ControlsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 24px 0;

	${media.max.md} {
		justify-content: flex-start;
		align-items: center;
	}

	${media.max.sm} {
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 32px 0;
	}
`
