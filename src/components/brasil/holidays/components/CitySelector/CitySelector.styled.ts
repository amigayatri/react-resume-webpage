"use client"

import styled from "styled-components"
import { media } from "../../../../../constants/medias"
import { SelectWrapper } from "../../../../common/Select/Select.styled"

export const CitySelectorWrapper = styled.div``
export const Button = styled.button`
	margin: 24px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px 8px;
	border-radius: 8px;
	border: none;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid currentColor;
	flex: 1;
`
export const OpenText = styled.span`
	text-transform: capitalize;
	padding-left: 8px;
	font-weight: 700;
	transition: ${({ theme }) => theme.transition};
`

export const Selectors = styled.div`
	margin-top: 8px;
	display: flex;
	padding-right: 32px;
	flex-direction: column;
	flex: 2;
	& ${SelectWrapper} {
		max-width: 320px;
	}
`
export const CitiesWrapper = styled.div<{ $isOpen: boolean }>`
	overflow: hidden;
	height: fit-content;
	width: 100%;
	transition: ${({ theme }) => theme.transition};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-height: ${({ $isOpen }) => ($isOpen ? "320px" : "0px")};
	max-width: 512px;

	${media.max.sm} {
		flex-direction: column;
	}
`