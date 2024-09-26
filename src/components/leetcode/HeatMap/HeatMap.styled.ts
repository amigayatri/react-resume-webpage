import styled from "styled-components"

export const HeatMapWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	width: fit-content;
	margin: 32px auto 0;
	border-color: ${({ theme }) => theme.primary}14;
	border-width: 2px;
	border-style: solid;
	padding: 16px;
`
