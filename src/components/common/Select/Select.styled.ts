"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"
import { SelectStyleProps } from "../../../types/common/"

export const Label = styled.label`
	position: absolute;
	top: 2px;
	left: 4px;
	padding: 2px;
	line-height: 1;
	border-radius: 4px;
	font-weight: 700;
	display: inline-block;
	max-width: 100%;
	overflow-x: hidden;
	overflow-y: hidden;
	text-wrap: nowrap;
`

export const SelectInput = styled.select<{ $hasButton: boolean }>`
	border: 0px;
	text-transform: capitalize;
	width: 100%;
	padding: 4px 8px;
	border-radius: ${({ $hasButton }) => ($hasButton ? "0" : "0 8px 8px 0")};
`

export const Group = styled.optgroup``

export const Option = styled.option`
	text-transform: capitalize;
`
export const SelectInputWrapper = styled.div`
	padding-left: 4px;
	border-radius: 8px;
	border: 2px solid transparent;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

export const SelectWrapper = styled.div<{
	$customColors?: SelectStyleProps
	$onHeader: boolean
	$fontSize: number
}>`
	position: relative;
	padding: calc(${({ $fontSize }) => $fontSize - 0.25}rem - 4px) 0 8px;
	width: 100%;
	max-width: ${({ $onHeader }) => ($onHeader ? "320px" : "100%")};
	margin-left: ${({ $onHeader }) => ($onHeader ? "16px" : "0")};
	margin-right: ${({ $onHeader }) => ($onHeader ? "16px" : "0")};

	${SelectInputWrapper} {
		border-color: ${({ theme, $onHeader, $customColors }) =>
			$customColors !== undefined
				? $customColors.select.border
				: $onHeader
				? theme.pink
				: theme.accent};
	}
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

		font-size: ${({ $fontSize }) => $fontSize}rem;

		${media.max.xs} {
			max-width: 100%;
		}
		${media.max.sm} {
			max-width: 100%;
		}
	}
`
