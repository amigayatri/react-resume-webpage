"use client"

import styled from "styled-components"

export const AvailableMusicsWrapper = styled.section`
	padding-top: 64px;
	padding-bottom: 32px;
	text-align: center;
`

export const Title = styled.h1`
	font-size: 2rem;
	margin: 0;
	margin-bottom: 32px;
`

export const ListTitle = styled.h2`
	font-size: 1.5rem;
`
export const MusicList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 32px;
`

export const MusicButton = styled.div`
	background-color: ${({ theme }) => theme.blue};
	color: ${({ theme }) => theme.white};
	border-radius: 16px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Link = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.white};
	font-size: 1.5rem;
	font-weight: 700;
`
