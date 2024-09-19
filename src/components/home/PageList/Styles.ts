import styled from "styled-components"

export const Wrapper = styled.section`
	padding: 32px 0;
`

export const ListWrapper = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 32px;
	grid-template-rows: 1fr;
`