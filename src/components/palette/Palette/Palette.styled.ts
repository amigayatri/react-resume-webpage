import styled from "styled-components"
import media from "../../../constants/medias"

export const PaletteSection = styled.section`
	padding-top: 48px;
`
export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding-left: 36px;
	${media.max.sm} {
		flex-direction: column;
	}
`

export const Icon = styled.span`
	position: absolute;
	left: 2px;
`
export const CopyPalette = styled.div`
	cursor: pointer;
	width: fit-content;
`
export const PaletteWrapper = styled.div`
	display: flex;
	width: 100%;
	overflow-x: auto;
	margin-top: 16px;
	${media.max.sm} {
		flex-direction: column;
	}
`
export const PaletteColor = styled.div`
	height: 96px;
	min-width: 96px;
	min-height: 80px;
	flex: 1;
	border: 2px solid ${({ theme }) => theme.primary};
	border-right: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: copy;
	&:last-of-type {
		border-right: solid;
	}
	${media.max.sm} {
		border-right: solid;
		border-bottom: none;
		&:last-of-type {
			border-bottom: solid;
		}
	}
`

export const ColorCode = styled.span`
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.primary};
	padding: 4px;
`
export const PaletteName = styled.h2`
	width: fit-content;
	text-transform: capitalize;
`
export const SubTitle = styled.h3`
	margin: 16px 0;
`
export const ControlWrapper = styled.div`
	display: flex;
`
export const ControlButton = styled.button<{ $selected: boolean }>`
	color: ${({ theme }) => theme.primary};
	border: 2px solid currentColor;
	border-radius: 8px;
	padding: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ $selected, theme }) =>
		$selected ? theme.accent : "transparent"};
	margin-left: 8px;
	&:first-of-type {
		margin-left: 0;
	}
`