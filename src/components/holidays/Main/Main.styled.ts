import { TabList, Tabs } from "react-tabs"
import styled from "styled-components"
import media from "../../../constants/medias"

export const MainWrapper = styled.main`
	text-align: center;
`

export const CitySelectorWrapper = styled.div``
export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px 8px;
	border-radius: 8px;
	border: none;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
`
export const OpenText = styled.span`
	padding-left: 8px;
	font-weight: 700;
	transition: ${({ theme }) => theme.transition};
`

export const SelectorWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding-right: 32px;
	${media.max.md} {
		flex-direction: column;
	}
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
	}
`
export const Selector = styled.select`
	flex: 1;
	min-width: 196px;
	text-transform: capitalize;
	margin-top: 8px;
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
	background-color: ${({ theme }) => theme.purple};
	padding: 16px;
	border-radius: 16px 16px 0 0;
	margin: 0 auto;
	width: 100%;
	max-width: 512px;
`

export const List = styled(TabList)`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
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
