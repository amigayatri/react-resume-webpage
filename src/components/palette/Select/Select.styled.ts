import styled from "styled-components"

export const SelectWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
export const SelectPalette = styled.select`
	font-size: 1.5rem;
	width: fit-content;
	max-width: 100%;
	text-transform: capitalize;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.primary};
	padding: 4px;
	margin: 8px 0;
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