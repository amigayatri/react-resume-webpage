"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const PDFDownloadWrapper = styled.span`
	& a {
		text-decoration: none !important;
	}
`

export const PDFDownload = styled.div`
	padding: 8px 16px;
	border-radius: 16px;
	font-size: 1.25rem;
	background-color: ${({ theme }) => theme.secondAccent};
	text-decoration: none;
	color: ${({ theme }) => theme.primary};
	margin: 0 auto;
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: fixed;
	top: calc(var(--header-size) + 24px);
	right: 64px;
	z-index: 1000;
	${media.max.lg} {
		right: 48px;
	}
	${media.max.md} {
		flex-direction: row;
		margin: -16px var(--container) 0 auto;
		position: relative;
		top: auto;
		right: auto;
	}
`
export const PDFDownloadText = styled.span`
	margin-top: 8px;
	${media.max.md} {
		margin-top: 0;
		margin-left: 8px;
	}
`
