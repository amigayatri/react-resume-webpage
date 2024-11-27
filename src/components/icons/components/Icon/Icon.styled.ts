"use client"

import styled from "styled-components"

export const IconItem = styled.li`
	border: 2px solid ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.primary};
	padding: 16px;
	border-radius: 8px;
	width: 100%;
`
export const IconLink = styled.a`
	text-decoration: none;
	color: currentColor;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Id = styled.code`
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid ${({ theme }) => theme.white};
	border-left: none;
	border-right: none;
	width: calc(100% + 32px);
	overflow-x: hidden;
	padding: 2px 4px;
	text-align: center;
	margin: 4px -16px 8px;
`
export const IconWrapper = styled.div<{ $size: number }>`
	display: block;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid ${({ theme }) => theme.white};
	width: ${({ $size }) => $size}px;
	height: ${({ $size }) => $size}px;
	padding: 4px;
	border-radius: 16px;
`
export const Disclaimer = styled.span``
