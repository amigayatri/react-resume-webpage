import styled from "styled-components"

export const HeatMapWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	width: var(--max-leetcode);
	margin: 32px auto 0;
	border-color: ${({ theme }) => theme.primary}14;
	border-width: 2px;
	border-style: solid;
	padding: 16px;
	padding-top: 128px;
	border-radius: 16px;
	position: relative;
`

export const CalendarWrapper = styled.div<{ $isSimple: boolean }>`
	max-width: var(--max-leetcode);
	overflow: ${({ $isSimple }) => ($isSimple ? "scroll" : "visible")};
`