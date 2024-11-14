"use client"

import styled from "styled-components"
import { media } from "../../../../../constants/medias"

export const Button = styled.button`
	display: block;
	color: ${({ theme }) => theme.background};
	background-color: ${({ theme }) => theme.primary};
	border: 2px solid ${({ theme }) => theme.primary};
	font-weight: 700;
	padding: 4px 8px;
	flex: 1;
	min-width: 128px;
	font-size: 1.25rem;
`

export const SelectWrapper = styled.div`
	padding: 16px 0 8px;
	position: relative;
	display: flex;
	width: 100%;
	max-width: 480px;
	${media.max.xs} {
		flex-direction: column;
	}
`
export const ButtonsWrapper = styled.div<{ $isShowing: boolean }>`
	overflow: hidden;
	display: flex;
	transition: ${({ theme }) => theme.transition};
	max-width: ${({ $isShowing }) => ($isShowing ? "512px" : "0")};
	position: relative;
	padding-bottom: 40px;
	${media.max.md} {
		flex-direction: column;
	}
`

export const PreviewWrapper = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	bottom: 0;
	right: 0;
	border: 2px solid ${({ theme }) => theme.primary};
`
export const PreviewColor = styled.div`
	width: 100%;
	height: 32px;
`
