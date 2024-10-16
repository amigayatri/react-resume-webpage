import styled from "styled-components"

export const SelectWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
export const SelectPalette = styled.select`
	font-size: 1.5rem;
	width: fit-content;
	text-transform: capitalize;
`

export const OptionGroup = styled.optgroup``

export const Option = styled.option``
export const PaletteWrapper = styled.div`
	display: flex;
	width: 100%;
	overflow-x: auto;
`
export const PaletteColor = styled.div`
	height: 48px;
	min-width: 48px;
	flex: 1;
	border: 2px solid ${({ theme }) => theme.primary};
`