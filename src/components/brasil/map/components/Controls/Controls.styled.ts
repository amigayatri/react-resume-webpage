"use client"

import styled from "styled-components"
import { media } from "../../../../../constants/medias"

export const BrazilianMapWrapper = styled.section`
	padding: 32px 0;
	position: relative;
`
export const Title = styled.h1`
	font-size: 2.5rem;
	width: fit-content;
	margin: 0 auto 24px;
	padding-left: var(--color-container);
	max-width: 100%;
	overflow-x: auto;
`

export const Disclaimer = styled.span<{ $isOpen: boolean }>`
	display: block;
	overflow: hidden;
	width: 100%;
	padding: ${({ $isOpen }) => ($isOpen === true ? "8px 16px" : "0")};
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.background};
	max-height: ${({ $isOpen }) => ($isOpen === true ? "256px" : "0")};
	position: fixed;
	top: 196px;
	left: 0;
	${media.max.sm} {
		position: relative;
		top: auto;
	}
`
export const MapWrapper = styled.div`
	overflow-x: auto;
	margin-left: var(--color-container);
`

export const MapSVG = styled.svg`
	width: 100%;
	min-width: 512px;
	min-height: 512px;
`

export const SelectsWrapper = styled.div`
	bottom: calc(var(--footer-size) + 32px);
	left: var(--color-container);
	position: absolute;
	padding: 16px var(--color-container);
	margin: 0;
	margin-bottom: 16px;
	width: fit-content;
	max-width: calc(100vw - var(--color-container) - var(--color-container));
	display: flex;
	background-color: ${({ theme }) => theme.primary};
	border-radius: 8px;

	${media.max.lg} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 16px;
	}
	${media.max.sm} {
		grid-template-columns: repeat(1, 1fr);
		position: relative;
		bottom: auto;
		left: auto;
		margin: 0 auto;
	}
`
