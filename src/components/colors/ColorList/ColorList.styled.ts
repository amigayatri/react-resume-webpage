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
	border: 2px solid ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.background};
	background-color: ${({ theme }) => theme.primary};
	font-weight: 700;
	padding: 4px 8px;
	border-radius: 8px;
`

export const ButtonsWrapper = styled.div<{ $isShowing: boolean }>`
	overflow: hidden;
	display: flex;
	transition: ${({ theme }) => theme.transition};
	max-width: ${({ $isShowing }) => ($isShowing ? "512px" : "0")};
	position: relative;
	padding-bottom: 40px;
	${media.max.xs} {
		flex-direction: column;
	}
`
export const PaletteSelect = styled.select`
	text-transform: capitalize;
	margin-right: 8px;
	background-color: transparent;
	color: ${({ theme }) => theme.primary};
	width: 196px;
	height: 32px;
	${media.max.md} {
		width: 128px;
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

	${media.max.sm} {
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