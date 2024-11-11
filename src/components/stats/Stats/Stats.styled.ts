"use client"

import styled from "styled-components"
import { Tab, TabList } from "react-tabs"

export const StatsWrapper = styled.section`
	width: 100%;
	min-height: var(--fullpage);
	padding: 32px 0;
`
export const TabName = styled(Tab)`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.background};
	padding: 4px 8px;
	transition: ${({ theme }) => theme.transition};
	font-weight: 700;

	&.react-tabs__tab--selected {
		background-color: ${({ theme }) => theme.almostBlack};
		color: ${({ theme }) => theme.pink};
		border-radius: 4px;
	}
`

export const TabNamesWrapper = styled(TabList)`
	list-style: none;
	margin: 0 var(--color-container);
	display: flex;
	background-color: ${({ theme }) => theme.pink};
	width: fit-content;
	padding: 4px;
	border-radius: 8px;
`
