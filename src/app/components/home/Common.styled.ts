"use client"

import styled from "styled-components"
import { media } from "../../constants/medias"

export const ButtonWrapper = styled.li`
	margin: 0 auto;
	width: 100%;

	${media.min.lg} {
		width: 480px;
	}
`

export const ButtonStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding: 24px 32px;
	border-radius: 16px;
	border: 4px solid currentColor;
	background-color: ${({ theme }) => theme.accent};
	height: 100%;
	transition: ${({ theme }) => theme.transition};

	${media.max.md} {
		flex-direction: column;
	}
`

export const Label = styled.span`
	flex: 1;
	font-size: 1.25rem;
	font-weight: 700;
	text-align: center;
	margin: 8px;
	color: ${({ theme }) => theme.almostBlack};
`
