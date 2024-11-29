"use client"

import styled from "styled-components"
import { TabList, Tabs } from "react-tabs"
import { media } from "../../../../../constants/medias"

export const HolidaysWrapper = styled.section`
	${({ theme }) => theme.getScroll(theme.almostBlack, theme.pink, theme.purple)}
`

export const MainWrapper = styled.main`
	text-align: center;
	padding: 32px 0 0;
`

export const CitySelectorWrapper = styled.div``
export const Button = styled.button`
	margin: 24px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px 8px;
	border-radius: 8px;
	border: none;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid currentColor;
	flex: 1;
`
export const OpenText = styled.span`
	text-transform: capitalize;
	padding-left: 8px;
	font-weight: 700;
	transition: ${({ theme }) => theme.transition};
`
export const SelectorWrapper = styled.div`
	position: relative;
	flex: 1;
	padding: 16px 0 8px;
`

export const Label = styled.label`
	position: absolute;
	top: 2px;
	left: 4px;
	padding: 2px;
	font-size: 1rem;
	border-radius: 4px;
	font-weight: 700;
	background-color: ${({ theme }) => theme.blue};
	color: ${({ theme }) => theme.almostBlack};
`

export const Selectors = styled.div`
	margin-top: 8px;
	display: flex;
	padding-right: 32px;
	flex-direction: column;
	flex: 2;
`
export const CitiesWrapper = styled.div<{ $isOpen: boolean }>`
	overflow: hidden;
	height: fit-content;
	width: 100%;
	transition: ${({ theme }) => theme.transition};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-height: ${({ $isOpen }) => ($isOpen ? "320px" : "0px")};
	max-width: 512px;

	${media.max.sm} {
		flex-direction: column;
		& ${SelectorWrapper} {
			margin-bottom: 8px;
		}
	}
`
export const Selector = styled.select`
	width: 256px;
	font-size: 1.25rem;
	padding: 8px 4px 4px;
	text-transform: capitalize;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid ${({ theme }) => theme.pink};
	border-radius: 8px;
`
export const Option = styled.option`
	text-transform: capitalize;
`
export const Title = styled.h1`
	color: ${({ theme }) => theme.primary};
	font-size: 2rem;
	margin: 16px 0;
`

export const ListWrapper = styled(Tabs)`
	border: 2px solid ${({ theme }) => theme.primary};
	border-bottom: none;
	background-color: ${({ theme }) => theme.almostBlack};
	padding: 16px;
	border-radius: 16px 16px 0 0;
	margin: 0 auto;
	width: 100%;
	max-width: 512px;
`

export const List = styled(TabList)`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
	border: 2px solid ${({ theme }) => theme.purple};
	width: 100%;
	max-width: 512px;
	display: flex;
	justify-content: space-evenly;
	list-style: none;
	font-weight: 700;
	font-size: 1.5rem;
	padding: 8px;
	border-radius: 16px;
	cursor: pointer;
	margin: 8px auto;
	& .react-tabs__tab--selected {
		color: ${({ theme }) => theme.purple};
	}
`
