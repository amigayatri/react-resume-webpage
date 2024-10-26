import styled from "styled-components"
import media from "../../../constants/medias"

export const BrazilianMapWrapper = styled.section`
	padding: 32px 0;
	position: relative;
`
export const Title = styled.h1`
	font-size: 2.5rem;
	width: fit-content;
	margin: 16px auto;
	${media.max.sm} {
		font-size: 2rem;
	}
`

export const Disclaimer = styled.span<{ $isOpen: boolean }>`
	display: block;
	overflow: hidden;
	width: 100%;
	padding: ${({ $isOpen }) => ($isOpen === true ? "8px" : "0")}
		var(--color-container);
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.background};
	max-height: ${({ $isOpen }) => ($isOpen === true ? "256px" : "0")};
	position: fixed;
	top: 196px;
	left: 0;
	${media.max.sm} {
		position: relative;
		top: auto;
	}
`
export const MapWrapper = styled.div`
	overflow-x: auto;
`
export const MapSVG = styled.svg`
	width: 100%;
	min-width: 512px;
	min-height: 512px;
`
export const SelectWrapper = styled.div`
	bottom: 64px;
	left: var(--color-container);
	position: fixed;
	padding: 16px;
	width: fit-content;
	display: flex;
	background-color: ${({ theme }) => theme.primary};
	border-radius: 8px;

	${media.max.lg} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 16px;
	}
	${media.max.sm} {
		grid-template-columns: repeat(1, 1fr);
		position: relative;
		bottom: auto;
		left: auto;
		margin: 0 auto;
	}
`
export const Select = styled.select`
	text-transform: capitalize;
	font-size: 1.5rem;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
	border: 2px solid ${({ theme }) => theme.accent};
	border-radius: 8px;
	padding: 8px 8px 4px;
	max-width: 320px;
`

export const Label = styled.label`
	background-color: ${({ theme }) => theme.purple};
	color: ${({ theme }) => theme.almostBlack};
	position: absolute;
	padding: 2px;
	border-radius: 4px;
	top: 2px;
	left: 4px;
`
export const LabelWrapper = styled.span`
	display: flex;
	position: relative;
	flex-direction: column;
	margin-left: 16px;
	padding: 16px 0 8px;
	&:first-of-type {
		margin-left: 0;
	}
	${media.max.lg} {
		margin-left: 0;
	}
`
export const Option = styled.option`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
`
