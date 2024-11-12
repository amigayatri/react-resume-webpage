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
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.almostBlack};
	border-radius: 4px;
	transition: ${({ theme }) => theme.transition};
	font-weight: 700;
	display: block;
	margin-right: 16px;

	&:last-of-type {
		margin-right: 0;
	}
`

export const TabNamesWrapper = styled(TabList)`
	list-style: none;
	margin: 0 var(--color-container);
	display: flex;
	background-color: ${({ theme }) => theme.white};
	border: 4px solid ${({ theme }) => theme.primary};
	width: fit-content;
	padding: 4px;
	border-radius: 8px;
`
