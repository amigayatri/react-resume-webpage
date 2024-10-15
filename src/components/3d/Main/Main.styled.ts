import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

export const MainWrapper = styled.main`
	padding: 0 calc(var(--color-container) * 0.5) 32px;
`
export const Description = styled.section`
	min-height: 80px;
	padding: 8px calc(var(--color-container) * 0.5);
`
export const Title = styled.h1``
export const Section = styled.section``
export const Summary = styled.summary`
	margin: 8px 0 0;
`
export const TabName = styled(Tab)`
	font-size: 1.25rem;
	color: ${({ theme }) => theme.secondAccent};
	border-radius: 4px 4px 0 0;
	padding: 4px 8px;
	&.react-tabs__tab--selected {
		background-color: ${({ theme }) => theme.almostBlack};
		color: ${({ theme }) => theme.accent};
	}
`
export const TabsWrapper = styled(Tabs)`
	background-color: ${({ theme }) => theme.accent};
	border-radius: 8px;
	min-height: calc(var(--fullpage) - 80px);
`
export const TabNamesWrapper = styled(TabList)`
	display: flex;
	list-style: none;
	height: 48px;
	padding: 8px calc(var(--color-container) * 0.5 - 8px) 0;
`
export const TabContent = styled(TabPanel)`
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.primary};
	border-radius: 0 0 8px 8px;
	&.react-tabs__tab-panel--selected {
		min-height: calc(var(--fullpage) - 48px - 80px);
		padding: 16px calc(var(--color-container) * 0.5);
		border: 2px solid ${({ theme }) => theme.accent};
		border-top: none;
	}
`
