"use client"

import styled from "styled-components"

export const LeetcodeWrapper = styled.div`
	margin: 0 var(--container);
	padding: 64px 0;
	${({ theme }) => theme.getScroll(theme.background, theme.pink, theme.blue)}
`
