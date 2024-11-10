"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const Label = styled.label`
	position: absolute;
	top: 2px;
	left: 4px;
	padding: 2px;
	line-height: 1;
	border-radius: 4px;
	font-weight: 700;
`

export const SelectInput = styled.select`
	padding: 4px 8px;
	border-radius: 8px;
	border: 2px solid currentColor;
	text-transform: capitalize;
	width: 100%;
`

export const Group = styled.optgroup``

export const Option = styled.option`
	text-transform: capitalize;
`
export const SelectWrapper = styled.div<{
	$customColors?: {
		label: {
			bg: string
			text: string
		}
		select: {
			bg: string
			text: string
			border: string
		}
	}
	$onHeader: boolean
	$fontSize: number
}>`
	position: relative;
	padding: calc(${({ $fontSize }) => $fontSize - 0.25}rem - 4px) 0 8px;
	width: 100%;
	max-width: ${({ $onHeader }) => ($onHeader ? "320px" : "100%")};

	${Group} {
		color: ${({ theme, $onHeader, $customColors }) =>
			$customColors !== undefined
				? $customColors.select.border
				: $onHeader
				? theme.pink
				: theme.accent};
	}
	${Option} {
		color: ${({ theme, $onHeader, $customColors }) =>
			$customColors !== undefined
				? $customColors.select.text
				: $onHeader
				? theme.white
				: theme.primary};
	}
	${Label} {
		font-size: ${({ $fontSize }) => $fontSize - 0.25}rem;
		color: ${({ theme, $onHeader, $customColors }) =>
			$customColors !== undefined
				? $customColors.label.text
				: $onHeader
				? theme.blue
				: theme.accent};
		background-color: ${({ theme, $onHeader, $customColors }) =>
			$customColors !== undefined
				? $customColors.label.bg
				: $onHeader
				? theme.almostBlack
				: theme.background};
	}
	${SelectInput} {
		background-color: ${({ theme, $onHeader, $customColors }) =>
			$customColors !== undefined
				? $customColors.select.bg
				: $onHeader
				? theme.almostBlack
				: theme.background};
		color: ${({ theme, $onHeader, $customColors }) =>
			$customColors !== undefined
				? $customColors.select.text
				: $onHeader
				? theme.white
				: theme.primary};
		border-color: ${({ theme, $onHeader, $customColors }) =>
			$customColors !== undefined
				? $customColors.select.border
				: $onHeader
				? theme.pink
				: theme.accent};
		font-size: ${({ $fontSize }) => $fontSize}rem;

		${media.max.xs} {
			max-width: ${({ $onHeader }) => ($onHeader ? "160px" : "100%")};
		}
		${media.max.sm} {
			max-width: ${({ $onHeader }) => ($onHeader ? "200px" : "100%")};
		}
	}
`
