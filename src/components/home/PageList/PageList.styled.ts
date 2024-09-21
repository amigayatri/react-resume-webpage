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
	grid-gap: 32px;
	grid-template-rows: 1fr;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
	@media (min-width: 768px) {
		width: 672px;
		margin: 0 auto;
	}
	@media (min-width: 1024px) {
		width: 984px;
	}
`