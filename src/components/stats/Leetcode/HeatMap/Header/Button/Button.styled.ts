"use client"

import styled from "styled-components"
import { media } from "../../../../../../constants/medias"

export const ButtonStyle = styled.span`
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.background};
	font-weight: 600;
	padding: 8px;
	border-radius: 8px;

	${media.max.sm} {
		margin-bottom: 8px;

		&:last-of-type {
			margin-bottom: 0;
		}
	}
`
