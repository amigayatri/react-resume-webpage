"use client"

import styled from "styled-components"
import { ControlItemWrapper } from "../Common.styled"

export const FilterWrapper = styled(ControlItemWrapper)`
	padding-right: 0;
	min-height: 72px;
`

export const SelectWrapper = styled.div<{ $showing: boolean }>`
	max-width: ${({ $showing }) => ($showing ? 420 : 0)}px;
	overflow-x: hidden;
	transition: ${({ theme }) => theme.transition};
	margin-left: ${({ $showing }) => ($showing ? 32 : 0)}px;
`
