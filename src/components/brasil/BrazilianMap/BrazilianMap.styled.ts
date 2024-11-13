"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const BrazilianMapWrapper = styled.section`
	padding: 32px 0;
	position: relative;
`
export const Title = styled.h1`
	font-size: 2.5rem;
	width: fit-content;
	margin: 16px auto;
	max-width: 100%;
	overflow-x: auto;
	${media.max.sm} {
		margin-right: calc(var(--color-container) * -1);
	}
`

export const Disclaimer = styled.span<{ $isOpen: boolean }>`
	display: block;
	overflow: hidden;
	width: 100%;
	padding: ${({ $isOpen }) => ($isOpen === true ? "8px" : "0")}
		var(--color-container);
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
	margin-right: calc(var(--color-container) * -1);
`
export const MapSVG = styled.svg`
	width: 100%;
	min-width: 512px;
	min-height: 512px;
`
export const SelectsWrapper = styled.div`
	bottom: calc(var(--footer-size) + 32px);
	left: var(--color-container);
	position: fixed;
	padding: 16px;
	width: fit-content;
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
