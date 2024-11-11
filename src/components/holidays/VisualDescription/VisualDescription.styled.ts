"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const VisualDescriptionWrapper = styled.div`
	position: fixed;
	bottom: 64px;
	left: calc(50% + 272px);
	width: fit-content;
	background-color: ${({ theme }) => theme.almostBlack};
	border-radius: 16px;
	padding: 8px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	${media.max.lg} {
		position: relative;
		flex-direction: row;
		margin: 0 auto 8px;
		bottom: auto;
		left: auto;
		width: 512px;
	}
	${media.max.sm} {
		flex-direction: column;
		max-width: 100%;
	}
`
export const KeyWrapper = styled.span`
	display: flex;
	margin-top: 16px;
	justify-content: center;
	align-items: flex-start;
	border-radius: 4px;
	font-weight: 700;
	padding: 2px 4px;
	color: ${({ theme }) => theme.almostBlack};
	width: 100%;

	&:first-of-type {
		margin-top: 0;
	}
	${media.max.lg} {
		margin-top: 0;
		margin-left: 8px;
		&:first-of-type {
			margin-left: 0;
		}
	}
	${media.max.sm} {
		width: 100%;
		margin-top: 8px;
		margin-left: 0;
		&:first-of-type {
			margin-top: 0;
		}
	}
`
