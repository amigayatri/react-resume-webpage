import styled from "styled-components"
import media from "../../../constants/medias"

export const Wrapper = styled.section`
	padding: 32px 0;
`

export const ListWrapper = styled.ul`
	padding: 0;
	margin: 0;
`

export const Button = styled.button`
	display: block;
	border: 2px solid ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
	background-color: ${({ theme }) => theme.primary};
	font-weight: 700;
	padding: 4px 8px;
	flex: 1;
	font-size: 1.25rem;
	border-radius: 0 8px 8px 0;
	${media.max.xs} {
		border-radius: 0 0 8px 8px;
	}
`

export const SelectWrapper = styled.div`
	padding: 16px 0 8px;
	position: relative;
	display: flex;
	width: 100%;
	max-width: 512px;
	${media.max.xs} {
		flex-direction: column;
	}
`
export const Label = styled.label`
	position: absolute;
	top: 2px;
	left: 2px;
	padding: 2px;
	font-weight: 600;
	font-size: 1rem;
	border-radius: 4px;
	color: ${({ theme }) => theme.background};
	background-color: ${({ theme }) => theme.primary};
`

export const ButtonsWrapper = styled.div<{ $isShowing: boolean }>`
	overflow: hidden;
	display: flex;
	transition: ${({ theme }) => theme.transition};
	max-width: ${({ $isShowing }) => ($isShowing ? "512px" : "0")};
	position: relative;
	padding-bottom: 40px;
	${media.max.md} {
		flex-direction: column;
	}
`
export const PaletteSelect = styled.select`
	text-transform: capitalize;
	background-color: transparent;
	color: ${({ theme }) => theme.primary};
	border: 2px solid ${({ theme }) => theme.primary};
	border-radius: 8px 0 0 8px;
	padding: 8px;
	min-width: 196px;
	flex: 2;
	font-size: 1.25rem;
	${media.max.xs} {
		border-radius: 8px 8px 0 0;
	}
`

export const PaletteOption = styled.option`
	color: ${({ theme }) => theme.primary};
	background-color: ${({ theme }) => theme.background};
`

export const PaletteGroup = styled.optgroup`
	color: ${({ theme }) => theme.primary};
	background-color: ${({ theme }) => theme.background};
`

export const SubHeadingWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	${media.max.md} {
		flex-direction: column;
	}
`
export const PreviewWrapper = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	bottom: 0;
	right: 0;
	border: 2px solid ${({ theme }) => theme.primary};
`
export const PreviewColor = styled.div`
	width: 100%;
	height: 32px;
`