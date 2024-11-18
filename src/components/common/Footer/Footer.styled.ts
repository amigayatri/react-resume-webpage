"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const FooterWrapper = styled.footer`
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border-top: 1px solid ${({ theme }) => theme.primary};
	font-size: 1.25rem;
	font-weight: 700;
	width: 100%;
	z-index: 500;
	position: relative;
	height: var(--footer-size);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px;
	text-align: center;

	${media.print} {
		display: none;
	}
`

export const Name = styled.span`
	color: ${({ theme }) => theme.secondAccent};
`

export const Link = styled.a`
	text-decoration: none;
	margin-right: 8px;
	color: ${({ theme }) => theme.accent};
`

export const SecondaryLink = styled(Link)`
	margin-left: 8px;
	color: ${({ theme }) => theme.secondAccent};
`

export const FooterContent = styled.div<{ $isRTL: boolean }>`
	flex-direction: ${({ $isRTL }) => ($isRTL ? "row-reverse" : "row")};
	max-width: fit-content;
	margin: 0 auto;
`
