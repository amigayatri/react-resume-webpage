"use client"

import styled from "styled-components"

export const Label = styled.span<{ $color?: string }>`
	color: ${({ $color, theme }) => $color || theme.primary};
	display: inline-block;
	transition: ${({ theme }) => theme.transition};
	font-size: 1.25rem;
	font-weight: 300;
`

export const ProgressDefault = styled.progress`
	visibility: hidden;
	position: absolute;
`

export const ProgressTitle = styled.h2<{ $hide?: boolean }>`
	margin: 8px 0;
	font-size: 1.5rem;
	display: ${({ $hide }) => ($hide ? "none" : "inline-block")};
	font-weight: 300;
	transition: ${({ theme }) => theme.transition};
`

export const Subtitle = styled.span`
	margin: 8px 0;
	font-size: 1.125rem;
	display: inline-block;
	font-weight: 100;
	transition: ${({ theme }) => theme.transition};
	opacity: 0.7;
`

export const TitleWrapper = styled.div``

export const Bar = styled.div<{
	$percentage: number
	$color?: string
	$done?: boolean
	$full: boolean
}>`
	background-color: ${({ $color, theme, $done }) =>
		$done ? $color || theme.primary : ($color || theme.primary) + 14};
	opacity: ${({ $done }) => ($done ? "0.2" : "1")};
	width: ${({ $percentage }) => $percentage}%;
	height: 16px;
	position: absolute;
	bottom: 8px;
	left: 0;
	transition: ${({ theme }) => theme.transition};
	border-radius: ${({ $full }) => ($full ? "4px" : "4px 0 0 4px")};
`

export const ProgressWrapper = styled.div`
	position: relative;

	&:hover
		> ${TitleWrapper}
		> ${ProgressTitle},
		&:focus
		> ${TitleWrapper}
		> ${ProgressTitle},
		&:hover
		> ${TitleWrapper}
		> ${Subtitle},
		&:focus
		> ${TitleWrapper}
		> ${Subtitle},
		&:hover
		${Bar},
		&:hover
		${Bar},
		&:hover
		${Label},
		&:hover
		${Label} {
		font-weight: 700;
		opacity: 1;
	}
`
