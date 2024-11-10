"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"
import { whiteToBlack } from "../../../themes/animations/errors"
import { Icon } from "../../common/SVGIcon/SVGIcon.styled"

export const ErrorMessageWrapper = styled.section`
	display: flex;
	background-color: ${({ theme }) => theme.almostBlack};
	padding: 8px 16px;
	padding-right: 24px;
	justify-content: center;
	align-items: center;
	position: relative;

	${media.max.md} {
		& ${Icon} {
			width: 64px;
			height: 64px;
		}
	}

	${media.max.xs} {
		flex-direction: column;
	}
`

export const WritingCursor = styled.div`
	width: 2px;
	height: calc(100% - 32px);
	max-height: 64px;
	position: absolute;
	bottom: 16px;
	right: 16px;
	animation: ${whiteToBlack} 2s infinite linear both;

	${media.max.sm} {
		max-height: 32px;
	}
`

export const Message = styled.h1`
	font-size: 2rem;
	color: ${({ theme }) => theme.white};
	margin-left: 16px;
	width: 100%;

	${media.max.md} {
		font-size: 1.75rem;
	}

	${media.max.sm} {
		margin-left: 16px;
		max-width: 60%;
	}
	${media.max.xs} {
		margin-left: 0;
		max-width: 100%;
	}
`
