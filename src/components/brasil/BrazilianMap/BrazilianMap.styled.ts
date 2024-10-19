import styled from "styled-components"
import media from "../../../constants/medias"

export const BrazilianMapWrapper = styled.section`
	padding: 32px 0;
	position: relative;
`
export const Title = styled.h1`
	font-size: 2.5rem;
	width: fit-content;
	margin: 0px auto;
	${media.max.sm} {
		font-size: 2rem;
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
`
export const Select = styled.select`
	text-transform: capitalize;
	font-size: 1.5rem;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
	border: 2px solid ${({ theme }) => theme.accent};
	border-radius: 4px;
	padding: 4px;
`

export const Label = styled.label`
	color: ${({ theme }) => theme.accent};
	padding: 2px;
`
export const LabelWrapper = styled.span`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
	&:first-of-type {
		margin-left: 0;
	}
`
export const Option = styled.option`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
`
