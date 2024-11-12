"use client"

import styled from "styled-components"
import { media } from "../../../../constants/medias"

export const QuestionsWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 32px;

	${media.max.md} {
		flex-direction: column;
	}
`

export const TotalWrapper = styled.div``

export const QuestionsDetailsWrapper = styled.div`
	width: 100%;
	margin-left: 64px;
	max-width: var(--max-leetcode);
	${media.max.md} {
		margin: 32px auto 0;
	}
`

export const Title = styled.h2`
	color: ${({ theme }) => theme.pink};
`
