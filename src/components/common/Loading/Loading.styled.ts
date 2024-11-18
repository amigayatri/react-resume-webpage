"use client"

import styled from "styled-components"

export const LoadingWrapper = styled.div<{ $fullPage: boolean }>`
	width: 100%;
	height: 100%;
	min-width: 320px;
	overflow-x: hidden;
	min-height: ${({ $fullPage }) => ($fullPage ? "var(--fullpage)" : "160px")};
	display: flex;
	justify-content: center;
	align-items: center;
`
