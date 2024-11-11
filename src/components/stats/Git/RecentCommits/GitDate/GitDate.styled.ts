"use client"

import styled from "styled-components"
import { AccordionButtonWrapper } from "../Accordion/Accordion.styled"

export const Date = styled.h3``

export const CommitQuantity = styled.span`
	color: ${({ theme }) => theme.blue};
	margin-left: 8px;
`

export const RecentCommitsHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const GitOpen = styled(AccordionButtonWrapper)<{ $isOpen: boolean }>`
	min-width: 20px;
	height: 32px;
	padding-right: 8px;
	position: relative;
	&::after,
	&::before {
		transition: ${({ theme }) => theme.transition};
		content: " ";
		display: block;
		width: 2px;
		height: ${({ $isOpen }) => ($isOpen ? "32px" : "16px")};
		position: absolute;
		left: ${({ $isOpen }) => ($isOpen ? "0px" : "10px")};
		top: 0;
		transform: rotate(45deg);
		background-color: ${({ theme, $isOpen }) =>
			$isOpen ? theme.pink : theme.purple};
	}
	&::before {
		transform: rotate(135deg);
		left: 0px;
	}
`

export const AccordionHeaderWrapper = styled.div`
	padding: 8px 0 8px 16px;
	margin-left: 16px;
	position: relative;
	border-left: 2px solid transparent;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&::before {
		z-index: 2;
		margin: 0;
		content: " ";
		width: 2px;
		min-width: 2px;
		height: 100%;
		display: block;
		list-style: none;
		background-color: ${({ theme }) => theme.white};
		position: absolute;
		top: 0;
		left: -1px;
	}
	&::after {
		position: absolute;
		content: " ";
		width: 12px;
		height: 12px;
		left: -6px;
		top: 50%;
		border-radius: 50%;
		transform: translateY(-6px);
		background-color: ${({ theme }) => theme.purple};
		z-index: 5;
	}
`

export const GitDateWrapper = styled.div<{ $isOpen: boolean }>`
	list-style: none;
	padding: 0;
	color: ${({ theme }) => theme.white};
	border-radius: 0;
	border-color: ${({ theme }) => theme.purple};
	transition: ${({ theme }) => theme.transition};
	border-width: ${({ $isOpen }) => ($isOpen ? "2px" : "0")};
	border-style: ${({ $isOpen }) => ($isOpen ? "solid" : "none")};
	border-left: none;
	& ${AccordionHeaderWrapper} {
		color: ${({ theme, $isOpen }) => ($isOpen ? theme.pink : theme.purple)};
	}
	& ${AccordionHeaderWrapper}::before {
		background-color: ${({ theme }) => theme.purple};
	}
	& ${AccordionHeaderWrapper}::after {
		transition: ${({ theme }) => theme.transition};
		background-color: ${({ theme, $isOpen }) =>
			$isOpen ? theme.pink : theme.purple};
	}
`
