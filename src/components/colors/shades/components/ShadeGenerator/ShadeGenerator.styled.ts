"use client"

import styled from "styled-components"

export const ShadeGeneratorWrapper = styled.section`
	${({ theme }) => theme.getScroll(theme.background, theme.pink, theme.blue)}
`
