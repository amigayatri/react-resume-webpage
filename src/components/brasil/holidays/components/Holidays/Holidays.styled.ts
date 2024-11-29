"use client"

import styled from "styled-components"
import { TabList, Tabs } from "react-tabs"

export const ListWrapper = styled(Tabs)`
	border: 2px solid ${({ theme }) => theme.primary};
	border-bottom: none;
	background-color: ${({ theme }) => theme.almostBlack};
	padding: 16px;
	border-radius: 16px 16px 0 0;
	margin: 0 auto;
	width: 100%;
	max-width: 512px;
	min-height: calc(var(--fullpage) - 144px);
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
