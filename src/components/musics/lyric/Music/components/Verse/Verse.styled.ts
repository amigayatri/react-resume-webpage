"use client"

import styled from "styled-components"
import { media } from "../../../../../../constants/medias"
import { IconWrapper } from "../../../../../../icons/Elements/Common.styled"

export const VerseWrapper = styled.ul<{ $accentColor?: string }>`
	list-style: none;
	padding: 0;
	height: fit-content;
	min-height: 320px;
	padding: 16px 0;
	font-size: 1.5rem;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-style: italic;
	color: ${({ theme }) => theme.primary};

	${media.max.sm} {
		font-size: 1.25rem;
		& ${IconWrapper} svg {
			width: 48px;
			height: 48px;
		}
	}
	${media.max.xs} {
		& ${IconWrapper} svg {
			width: 40px;
			height: 40px;
		}
	}
`
export const Line = styled.li``

export const ChorusWrapper = styled(VerseWrapper)`
	color: ${({ theme, $accentColor }) =>
		$accentColor === undefined ? theme.accent : $accentColor};
	font-size: 1.75rem;
	${media.max.sm} {
		font-size: 1.5rem;
		& ${IconWrapper} svg {
			width: 64px;
			height: 64px;
		}
	}

	${media.max.xs} {
		& ${IconWrapper} svg {
			width: 56px;
			height: 56px;
		}
	}
`
