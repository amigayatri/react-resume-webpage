"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const MenuWrapper = styled.header`
	height: var(--header-size);
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.white};
	padding: 8px var(--color-container);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	width: 100vw;
	z-index: 5000;
	top: 0;

	${media.print} {
		display: none;
	}
`

export const SettingsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	color: ${({ theme }) => theme.white};
	margin-left: 16px;
`