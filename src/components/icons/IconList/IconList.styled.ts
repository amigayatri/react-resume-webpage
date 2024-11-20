"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const IconListWrapper = styled.section``
export const List = styled.ul`
	display: grid;
	list-style: none;
	grid-template-columns: repeat(8, calc(12.5% - 16px));
	gap: 16px;
	${media.max.xxl} {
		grid-template-columns: repeat(7, calc(14.28% - 15px));
	}
	${media.max.xl} {
		grid-template-columns: repeat(6, calc(16.66% - 14px));
	}
	${media.max.lg} {
		grid-template-columns: repeat(5, calc(20% - 13px));
	}
	${media.max.md} {
		grid-template-columns: repeat(4, calc(25% - 12px));
	}
	${media.max.sm} {
		grid-template-columns: repeat(2, calc(50% - 8px));
	}
	${media.max.xs} {
		grid-template-columns: repeat(1, 100%);
	}
`
export const IconItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: fit-content;
	border: 2px solid ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.primary};
	padding: 8px 0;
	border-radius: 8px;
	width: 100%;
`
export const Id = styled.code`
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid ${({ theme }) => theme.white};
	border-left: none;
	border-right: none;
	width: 100%;
	overflow-x: hidden;
	padding: 2px 4px;
	text-align: center;
	margin: 4px 0 8px;
`
export const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	border: 2px solid ${({ theme }) => theme.white};
	width: 64px;
	height: 64px;
	padding: 4px;
	border-radius: 16px;
`
