"use client"

import styled from "styled-components"
import { ToggleIconWrapper } from "../../../icons/Elements/Common.styled"

export const Wrapper = styled.div`
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
`
export const Label = styled.span<{
	$customColor?: string
}>`
	font-weight: 700;
	font-size: 1.125rem;
	margin-left: 16px;
	height: fit-content;
	display: inline-block;
	cursor: pointer;
	color: ${({ theme, $customColor }) =>
		$customColor === undefined ? theme.accent : $customColor};
`
export const ToggleWrapper = styled.div<{
	$customColor?: string
	$darkBg: boolean
	$size: number
}>`
	cursor: pointer;
	display: flex;
	width: ${({ $size }) => $size * 2 + 4}px;
	min-width: ${({ $size }) => $size * 2 + 4}px;
	height: ${({ $size }) => $size + 16}px;
	position: relative;
	background-color: ${({ theme, $darkBg }) =>
		$darkBg ? theme.almostBlack : theme.background};
	color: ${({ theme, $darkBg }) =>
		$darkBg ? theme.almostBlack : theme.background};
	border: solid 2px
		${({ theme, $customColor }) =>
			$customColor === undefined ? theme.accent : $customColor};
	border-radius: ${({ $size }) => $size * 0.5 + 8}px;

	& ${ToggleIconWrapper} {
		background-color: ${({ theme, $customColor }) =>
			$customColor === undefined ? theme.accent : $customColor};
		width: ${({ $size }) => $size + 8}px;
		height: ${({ $size }) => $size + 8}px;
	}
`