import styled from "styled-components"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { ProgressWrapper } from "../../common/Progress/Progress.styled"
import media from "../../../constants/medias"

export const UsedIconsWrapper = styled.section`
	text-align: center;
	padding: 16px;
	margin: 0 -16px 32px;
	border-radius: 16px;
	color: ${({ theme }) => theme.white};
	border: 2px solid ${({ theme }) => theme.primary};
	background-color: ${({ theme }) => theme.almostBlack};
	${({ theme }) => theme.scroll}
`
export const SectionTitle = styled.h2``
export const Subtitle = styled.h3``
export const GlobalData = styled.div`
	& ${Subtitle} {
		color: ${({ theme }) => theme.purple};
	}
`
export const Summary = styled.summary`
	margin: 16px 0;
`
export const ProgressBarsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, calc(50% - 8px));
	gap: 16px;
	width: 100%;
	margin: 0 auto;
	padding: 16px 0;
	${media.max.sm} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	${media.max.md} {
		grid-template-columns: repeat(2, 320px);
		width: fit-content;
		max-width: 100%;
		margin: 0 auto;
		overflow-x: auto;
	}
	& ${ProgressWrapper} {
		min-width: 320px;
		width: 100%;
	}
`
export const Button = styled.button`
	margin: 16px auto;
	display: flex;
	justify-content: flex-start;
	width: 100%;
	max-width: 560px;
	align-items: center;
	border: 4px solid ${({ theme }) => theme.blue};
	background-color: ${({ theme }) => theme.pink};
	color: ${({ theme }) => theme.blue};
	font-size: 1.25rem;
	text-transform: capitalize;
	border-radius: 16px;
	padding: 4px 8px;
`
export const ButtonIcon = styled.div`
	margin-left: 8px;
	display: block;
	height: 48px;
	width: 48px;
	&:first-of-type {
		margin-left: 0;
	}
`
export const ButtonLabel = styled.span`
	margin-left: 8px;
`
export const DetailedStats = styled.div<{ $open: boolean }>`
	max-height: ${({ $open }) => ($open ? "512px" : "0px")};
	overflow: hidden;
	transition: ${({ theme }) => theme.transition};
	& ${Subtitle} {
		color: ${({ theme }) => theme.blue};
	}
`
export const LocalTab = styled(Tab)`
	padding: 8px;
	background-color: ${({ theme }) => theme.white};
	color: ${({ theme }) => theme.almostBlack};
	border-radius: 8px;
	margin-left: 16px;
	&:first-of-type {
		margin-left: 0;
	}
	&.react-tabs__tab--selected {
		background-color: ${({ theme }) => theme.pink};
	}
`
export const LocalTabsList = styled(TabList)`
	margin: 16px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow-x: auto;
	width: 100%;
	list-style: none;
`
export const LocalTabContent = styled(TabPanel)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& ${ProgressWrapper} {
		width: 100%;
		max-width: 512px;
	}
`
export const TabsWrapper = styled(Tabs)``
export const IdsList = styled.ul`
	margin-top: 16px;
	list-style: none;
	padding: 8px 0 16px;
	display: flex;
	overflow-x: auto;
	max-width: 100%;
`
export const IdWrapper = styled.li`
	padding: 4px;
	border-radius: 8px;
	color: ${({ theme }) => theme.almostBlack};
	background-color: ${({ theme }) => theme.white};
	margin-left: 8px;
	&:first-of-type {
		margin-left: 0;
	}
`
export const Id = styled.span`
	display: block;
	width: fit-content;
	min-width: 64px;
`
