"use client"

import { TagCloud } from "react-tagcloud"
import styled from "styled-components"

export const CloudTag = styled(TagCloud)`
	overflow-x: visible;
	overflow-y: visible;
`

export const SkillLevelWrapper = styled.div`
	max-width: var(--max-leetcode);
	margin: 16px auto;
`

export const SkillTag = styled.span<{ $color: string; $size: number }>`
	font-size: ${({ $size }) => $size}px;
	color: ${({ $color }) => $color};
	word-wrap: anywhere;
	padding: 8px;
	border-radius: 8px;
	border: 2px solid transparent;
	z-index: 2;
	position: relative;
	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.primary};
		border-color: ${({ $color }) => $color};
		z-index: 5;
	}
`
export const LevelTitle = styled.h3`
	text-transform: capitalize;
	font-size: 1.25rem;
	margin-bottom: 16px;
`
