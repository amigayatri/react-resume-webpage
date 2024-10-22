import styled from "styled-components"

export const MainWrapper = styled.main`
	min-height: var(--fullpage);
	padding: 32px var(--color-container);
`
export const ButtonWrapper = styled.div`
	display: flex;
	margin-right: calc(var(--color-container) * -1);
	overflow-x: auto;
`
export const ListsWrapper = styled.div`
	display: flex;
	margin-right: calc(var(--color-container) * -1);
	overflow-x: auto;
`
export const Button = styled.button`
	transition: ${({ theme }) => theme.transition};
	min-width: 196px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	border-radius: 16px;
	border: none;
	margin-left: 16px;
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.secondAccent};
	border: 4px solid ${({ theme }) => theme.secondAccent};
	&:nth-of-type(even) {
		background-color: ${({ theme }) => theme.secondAccent};
		color: ${({ theme }) => theme.accent};
		border-color: ${({ theme }) => theme.accent};
	}
	&:first-of-type {
		margin-left: 0;
	}
`

export const ValueWrapper = styled.span`
	transition: ${({ theme }) => theme.transition};
	font-size: 1.5rem;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.accent};
	border: 2px solid ${({ theme }) => theme.primary};
	border-right: none;
	border-left: none;
	height: 67px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ControlsWrapper = styled.div`
	margin-top: 8px;
	padding: 0;
	width: fit-content;
`

export const Control = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ControlButton = styled(Button)`
	min-width: 64px;
	margin-left: 0;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.accent};
	border: 2px solid ${({ theme }) => theme.primary};
	&:nth-of-type(even) {
		background-color: ${({ theme }) => theme.almostBlack};
		color: ${({ theme }) => theme.accent};
		border-color: ${({ theme }) => theme.primary};
	}
	&:first-of-type {
		border-radius: 16px 0 0 16px;
		border-right: none;
	}
	&:last-of-type {
		border-radius: 0 16px 16px 0;
		border-left: none;
	}
`