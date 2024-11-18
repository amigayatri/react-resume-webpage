"use client"

import styled from "styled-components"
import { ToggleIconWrapper } from "../SVGIcon/SVGIcon.styled"

export const Wrapper = styled.div`
	display: inline-flex;
	justify-content: center;
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
}>`
	cursor: pointer;
	display: flex;
	width: 44px;
	min-width: 44px;
	height: 32px;
	position: relative;
	background-color: ${({ theme, $darkBg }) =>
		$darkBg ? theme.almostBlack : theme.primary};
	color: ${({ theme, $darkBg }) =>
		$darkBg ? theme.almostBlack : theme.primary};
	border: solid 2px
		${({ theme, $customColor }) =>
			$customColor === undefined ? theme.accent : $customColor};
	border-radius: 16px;

	& > ${ToggleIconWrapper} {
		background-color: ${({ theme, $customColor }) =>
			$customColor === undefined ? theme.accent : $customColor};
	}
`