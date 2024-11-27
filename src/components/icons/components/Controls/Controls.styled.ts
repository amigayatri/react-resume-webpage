"use client"

import styled from "styled-components"
import { media } from "../../../../constants/medias"

export const ControlsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 16px 32px;

	${media.max.sm} {
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		padding: 32px 16px;
	}
`
