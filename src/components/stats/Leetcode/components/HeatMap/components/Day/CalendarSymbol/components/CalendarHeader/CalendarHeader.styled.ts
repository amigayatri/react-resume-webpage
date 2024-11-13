"use client"

import styled from "styled-components"

export const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	max-height: 16px;
`

export const Line = styled.div`
	width: 50px;
	height: 20px;
	position: absolute;
	top: 0;
	left: -1px;
	border-bottom-style: solid;
	border-bottom-width: 8px;
	z-index: 1;
`
export const Spiral = styled.div`
	width: 8px;
	height: 24px;
	transform: translateY(-12px);
	border-radius: 8px;
`

export const Day = styled.span`
	overflow: hidden;
	display: block;
	transition: ${({ theme }) => theme.transition};
	color: ${({ theme }) => theme.background};
	background-color: ${({ theme }) => theme.blue};
	font-size: 0.75rem;
	text-align: center;
	height: 0;
	width: 0;
	position: absolute;
	left: -2px;
	top: -2px;
	border-radius: 4px;
	z-index: 2;
`
