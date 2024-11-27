"use client"

import styled from "styled-components"

export const ControlItemWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: fit-content;
	padding: 8px 16px;
`

export const SelectWrapper = styled.div<{ $showing: boolean }>`
	width: ${({ $showing }) => ($showing ? 420 : 0)}px;
	overflow-x: hidden;
	transition: ${({ theme }) => theme.transition};
	margin-left: ${({ $showing }) => ($showing ? 32 : 0)}px;
`

export const SizeWrapper = styled(ControlItemWrapper)``

export const SizeLabel = styled.span`
	color: ${({ theme }) => theme.primary};
`

export const SizeButton = styled.div`
	cursor: pointer;
	color: ${({ theme }) => theme.accent};
`
