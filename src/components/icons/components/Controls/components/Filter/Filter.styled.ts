"use client"

import styled from "styled-components"
import { ControlItemWrapper } from "../Common.styled"
import { media } from "../../../../../../constants/medias"
import { ToggleIconWrapper } from "../../../../../../icons/Elements/Common.styled"
import {
	ToggleWrapper,
	Label
} from "../../../../../common/Toggle/Toggle.styled"
import { SelectWrapper } from "../../../../../common/Select/Select.styled"

export const SelectsWrapper = styled.div`
	overflow: hidden;
	display: flex;
	flex: 4;
	margin-left: 16px;

	& ${SelectWrapper} {
		margin-left: 16px;
	}

	${media.max.lg} {
		flex-direction: column;
		margin-left: 0;
		& ${SelectWrapper} {
			margin-left: 0;
			margin-bottom: 16px;
		}
	}
`

export const ToggleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	min-width: 200px;
	width: 200px;
`

export const AllButton = styled.div<{ $showing: boolean }>`
	background-color: ${({ theme }) => theme.secondAccent};
	cursor: pointer;
	border-radius: 16px;
	overflow: hidden;
	margin-left: 16px;
	color: ${({ theme }) => theme.accent};
	max-width: ${({ $showing }) => ($showing ? 420 : 0)}px;
	transition: ${({ theme }) => theme.transition};
`

export const ButtonLabel = styled.span`
	overflow: hidden;
	text-wrap: nowrap;
	padding-left: 8px;
	font-weight: 700;
	color: ${({ theme }) => theme.primary};
`

export const ButtonContent = styled.span`
	padding: 8px 16px;
	overflow: hidden;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const FilterWrapper = styled(ControlItemWrapper)<{ $showing: boolean }>`
	padding-right: 0;
	min-height: 60px;
	height: max-content;
	display: inline-flex;
	padding: 8px;
	border-radius: 16px;
	width: 100%;
	margin-bottom: 0;
	transition: ${({ theme }) => theme.transition};
	justify-content: flex-start;
	align-items: flex-start;
	border: 2px solid
		${({ $showing, theme }) => ($showing ? theme.accent : theme.primary)};

	& ${ToggleIconWrapper} {
		background-color: ${({ $showing, theme }) =>
			$showing ? theme.accent : theme.primary};
		opacity: ${({ $showing }) => ($showing ? "1" : "0.5")};
	}

	& ${Label} {
		color: ${({ $showing, theme }) =>
			$showing ? theme.accent : theme.primary};
		max-width: ${({ $showing }) => (!$showing ? "100%" : "0")};
		overflow: hidden;
		transition: ${({ theme }) => theme.transition};
		text-wrap: nowrap;
	}

	& ${ToggleWrapper} {
		border-color: ${({ $showing, theme }) =>
			$showing ? theme.accent : theme.primary};
	}

	& > ${SelectsWrapper} {
		max-width: ${({ $showing }) => ($showing ? 768 : 0)}px;
		transition: ${({ theme }) => theme.transition};
	}

	${media.max.md} {
		& > ${SelectsWrapper} {
			margin-left: 0;
			margin-top: 8px;
			max-height: ${({ $showing }) => ($showing ? 196 : 0)}px;
			max-width: ${({ $showing }) => ($showing ? 420 : 0)}px;
			transition: none;
		}
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		height: ${({ $showing }) => ($showing ? 196 : 60)}px;
	}
`