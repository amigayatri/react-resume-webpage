"use client"

import styled from "styled-components"
import { ControlItemWrapper } from "../Common.styled"
import { media } from "../../../../../../constants/medias"

export const SizeWrapper = styled(ControlItemWrapper)`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: 2px solid ${({ theme }) => theme.accent};
	padding: 0;
	border-radius: 16px;
	margin: 0;
	margin-left: 24px;
	box-sizing: content-box;

	${media.max.sm} {
		margin-left: 0;
	}
`

export const SizeLabel = styled.span`
	color: ${({ theme }) => theme.accent};
	font-size: 1.5rem;
	margin: 0 4px;
`

export const SizeButton = styled.div`
	cursor: pointer;
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.background};
	padding: 4px;
	border: 2px solid ${({ theme }) => theme.accent};
	border-radius: 12px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	&.minus {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 8px;
	}
	&.plus {
		border-top-left-radius: 0;
		border-bottom-left-radius: 8px;
	}
`
