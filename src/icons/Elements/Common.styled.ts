"use client"

import styled from "styled-components"

export const IconWrapper = styled.div<{
	$angle: number
	$isResponsive: boolean
}>`
	line-height: 1;
	height: ${({ $isResponsive }) => ($isResponsive ? "100%" : "fit-content")};
	width: ${({ $isResponsive }) => ($isResponsive ? "100%" : "fit-content")};
	display: inline-block;
	transform: rotate(${({ $angle }) => $angle}deg);
`

export const ToggleIconWrapper = styled(IconWrapper)<{ $isTrue?: boolean }>`
	width: 24px;
	height: 24px;
	margin: 2px;
	display: inline-block;
	padding: 4px;
	border-radius: 50%;
	z-index: 5;
	transform: ${({ $isTrue }) =>
		$isTrue === true ? "translate(12px)" : "none"};
`

export const Icon = styled.svg<{
	$size: number
	$hasTransition: boolean
	$isResponsive: boolean
}>`
	display: block;
	width: ${({ $size, $isResponsive }) =>
		$isResponsive ? "100%" : $size + "px"};
	height: ${({ $size, $isResponsive }) =>
		$isResponsive ? "100%" : $size + "px"};
	transition: ${({ theme, $hasTransition }) =>
		$hasTransition ? theme.transition : "none"};
`
