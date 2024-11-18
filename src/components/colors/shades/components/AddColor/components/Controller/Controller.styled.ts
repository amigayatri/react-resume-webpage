"use client"

import styled from "styled-components"
import { media } from "../../../../../../../constants/medias"

export const ButtonWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 24px;
	${media.max.md} {
		display: flex;
		flex-direction: row;
	}
	${media.max.sm} {
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
`

export const InputWrapper = styled.div`
	padding-top: 8px;
	transition: ${({ theme }) => theme.transition};
`

export const Wrapper = styled.section`
	padding: 32px 0;
`
