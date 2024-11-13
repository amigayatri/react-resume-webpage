"use client"

import styled from "styled-components"

export const ListsWrapper = styled.div`
	display: flex;
	margin: 0 calc(var(--color-container) * -1);
	padding: 0 var(--color-container);
	overflow-x: auto;
	${({ theme }) => theme.getScroll(theme.almostBlack, theme.pink, theme.purple)}
`
