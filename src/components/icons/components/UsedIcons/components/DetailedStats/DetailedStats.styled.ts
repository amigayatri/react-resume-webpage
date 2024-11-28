"use client"

import styled from "styled-components"
import { Subtitle } from "../../UsedIcons.styled"

export const DetailedStatsWrapper = styled.div<{ $open: boolean }>`
	max-height: ${({ $open }) => ($open ? "1024px" : "0px")};
	overflow: hidden;
	transition: ${({ theme }) => theme.transition};
	& ${Subtitle} {
		color: ${({ theme }) => theme.blue};
	}
`
