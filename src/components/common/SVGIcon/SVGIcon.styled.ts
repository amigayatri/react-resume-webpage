"use client"

import styled from "styled-components"

export const IconWrapper = styled.div`
	line-height: 1;
	height: fit-content;
	width: fit-content;
	display: inline-block;
`
export const ToggleIconWrapper = styled.div<{ $isTrue?: boolean }>`
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

export const Icon = styled.svg<{ $size: number; $hasTransition: boolean }>`
	display: block;
	width: ${({ $size }) => $size + "px"};
	height: ${({ $size }) => $size + "px"};
	transition: ${({ theme, $hasTransition }) =>
		$hasTransition ? theme.transition : "none"};
`
