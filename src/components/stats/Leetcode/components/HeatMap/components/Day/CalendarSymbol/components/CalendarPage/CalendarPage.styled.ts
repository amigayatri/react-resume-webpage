"use client"

import styled from "styled-components"

export const Page = styled.div`
	height: 44px;
	width: 100%;
`

export const ExercisesWrapper = styled.span`
	margin-top: 1px;
	margin-left: -1px;
	color: ${({ theme }) => theme.background};
	width: 50px;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
	height: 0;
	text-align: center;
	display: block;
	overflow: hidden;
`

export const Exercises = styled.span`
	width: 0px;
	overflow: hidden;
	display: block;
	color: ${({ theme }) => theme.background};
	transition: ${({ theme }) => theme.transition};
	font-size: 1.5rem;
	text-align: center;
`
