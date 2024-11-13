"use client"

import styled from "styled-components"
import { IconWrapper } from "../../../../../common/SVGIcon/SVGIcon.styled"
import { media } from "../../../../../../constants/medias"

export const DetailMessage = styled.h3`
	font-size: 1.5rem;
	display: inline;
	margin-left: 8px;
	color: ${({ theme }) => theme.white};
`
export const Success = styled.span`
	font-size: 1.5rem;
	display: inline;
	margin-left: 8px;
	color: ${({ theme }) => theme.purple};
`

export const DetailedBadgeWrapper = styled.div`
	height: 256px;
	width: 320px;
	padding: 32px;
	margin: 32px auto;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid ${({ theme }) => theme.white};
	position: relative;

	& ${IconWrapper} {
		display: inline-block;
		color: ${({ theme }) => theme.accent};
	}

	${media.max.xs} {
		width: 256px;
	}

	&::after {
		content: " ";
		display: block;
		border: 2px solid ${({ theme }) => theme.white};
		width: calc(100% - 40px);
		height: calc(100% - 40px);
		position: absolute;
		top: 20px;
		left: 20px;
		border-radius: 16px;
	}
`
