"use client"

import styled from "styled-components"

export const ButtonWrapper = styled.div`
	gap: 16px;
	overflow-x: auto;
	display: grid;
	grid-template-columns: repeat(5, 196px);
	margin: 0 calc(var(--color-container) * -1);
	padding: 0 var(--color-container);
`
export const ListsWrapper = styled.div`
	display: flex;
	margin: 0 calc(var(--color-container) * -1);
	padding: 0 var(--color-container);
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
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.secondAccent};
	border: 4px solid ${({ theme }) => theme.secondAccent};
	&:nth-of-type(even) {
		background-color: ${({ theme }) => theme.secondAccent};
		color: ${({ theme }) => theme.accent};
		border-color: ${({ theme }) => theme.accent};
	}
`

export const ValueWrapper = styled.span`
	transition: ${({ theme }) => theme.transition};
	font-size: 1.5rem;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.purple};
	border: 2px solid ${({ theme }) => theme.purple};
	border-right: none;
	border-left: none;
	height: 67px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ControlsWrapper = styled.div`
	margin-top: 16px;
	padding: 0;
	width: fit-content;
	display: flex;
`

export const Control = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 16px;
	&:first-of-type {
		margin-left: 0;
	}
`

export const ControlButton = styled(Button)<{ $isDisabled?: boolean }>`
	min-width: 64px;
	margin-left: 0;
	background-color: ${({ theme }) => theme.almostBlack};
	cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
	color: ${({ theme, $isDisabled }) =>
		$isDisabled === true ? theme.almostBlack : theme.purple};
	border: 2px solid ${({ theme }) => theme.purple};
	&:nth-of-type(even) {
		background-color: ${({ theme }) => theme.almostBlack};
		color: ${({ theme, $isDisabled }) =>
			$isDisabled === true ? theme.almostBlack : theme.purple};
		border-color: ${({ theme }) => theme.purple};
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
