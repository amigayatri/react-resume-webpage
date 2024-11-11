"use client"

import styled from "styled-components"

export const SelectSectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
export const SelectWrapper = styled.div`
	position: relative;
	padding: 24px 0 8px;
`
export const Label = styled.label`
	position: absolute;
	top: -2px;
	left: 4px;
	padding: 2px 4px;
	font-size: 1.5rem;
	font-weight: 700;
	color: ${({ theme }) => theme.background};
	border-radius: 6px;
	background-color: ${({ theme }) => theme.accent};
`
export const SelectPalette = styled.select`
	font-size: 1.5rem;
	width: fit-content;
	max-width: 100%;
	text-transform: capitalize;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.primary};
	border: 2px solid ${({ theme }) => theme.accent};
	padding: 8px 4px 4px;
	border-radius: 8px;
`

export const OptionGroup = styled.optgroup`
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.accent};
`

export const Option = styled.option`
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.primary};
`
