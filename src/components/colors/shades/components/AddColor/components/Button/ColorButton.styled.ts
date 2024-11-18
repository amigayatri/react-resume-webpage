"use client"

import styled from "styled-components"
import { media } from "../../../../../../../constants/medias"

export const ButtonTag = styled.button<{ $isActive: boolean }>`
	background-color: ${({ theme }) => theme.blue};
	color: ${({ theme }) => theme.almostBlack};
	border: none;
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	padding: ${({ $isActive }) => ($isActive ? "8px 16px" : "0px")};
	border-radius: 4px;
	margin: 0 auto;
	font-weight: 700;
	cursor: pointer;
	font-size: 1rem;
	display: ${({ $isActive }) => ($isActive ? "inline-block" : "none")};
	max-width: ${({ $isActive }) => ($isActive ? "100%" : "0px")};
	width: 100%;

	${media.max.md} {
		max-width: ${({ $isActive }) => ($isActive ? "320px" : "0px")};
		margin-right: 8px;
		margin-bottom: 8px;
	}

	${media.max.sm} {
		max-width: ${({ $isActive }) => ($isActive ? "100%" : "0px")};
	}
`
