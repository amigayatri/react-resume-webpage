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
	border-radius: 16px;
	max-width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
`
