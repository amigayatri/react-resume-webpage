"use client"

import styled from "styled-components"
import { media } from "../../../../constants/medias"

export const BarGraphWrapper = styled.div`
	padding-top: 32px;
	padding-left: 96px;
	width: fit-content;
	position: relative;
	${media.max.sm} {
		padding-left: 80px;
	}
`

export const BarGraphContainer = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: column;
	border-left: 2px solid ${({ theme }) => theme.white};
	max-width: 256px;
`

export const BarStyle = styled.div<{ $width: number }>`
	width: 256px;
	height: 24px;
	background-color: ${({ theme }) => theme.pink};
	border-radius: 0 12px 12px 0;
	max-width: ${({ $width }) => $width}%;
	border: 2px solid transparent;
	border-left: none;
	${media.max.sm} {
		width: 196px;
	}
`

export const BarKeyContainer = styled.div`
	display: flex;
`
export const BarKeyStyle = styled.span`
	text-transform: capitalize;
	color: ${({ theme }) => theme.purple};
	position: absolute;
	left: 0;
	transform: translate(calc(-100% - 4px));
`

export const BarValueStyle = styled.span`
	color: ${({ theme }) => theme.blue};
	position: absolute;
	left: 4px;
	max-width: 0;
	overflow: hidden;
`
export const BarWrapper = styled.div`
	margin: 2px auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	&:hover,
	&:focus {
		${BarValueStyle} {
			max-width: fit-content;
			color: ${({ theme }) => theme.pink};
		}
		${BarKeyStyle} {
			font-weight: 700;
			color: ${({ theme }) => theme.blue};
		}
		${BarStyle} {
			background-color: ${({ theme }) => theme.blue};
		}
	}
`

export const BarGraphTitle = styled.h3`
	position: absolute;
	color: ${({ theme }) => theme.white};
	transform: translate(calc(-100%));
	top: 3px;
	font-size: 1.25rem;
	font-weight: 700;
	border-bottom: 2px solid ${({ theme }) => theme.white};
	padding-left: 4px;
	padding-bottom: 2px;
`
