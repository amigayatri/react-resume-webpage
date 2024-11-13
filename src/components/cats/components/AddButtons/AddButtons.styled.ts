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
