import styled from "styled-components"

export const MainWrapper = styled.main`
	min-height: var(--fullpage);
	padding: 32px var(--color-container);
`
export const Title = styled.h1`
	color: ${({ theme }) => theme.accent};
	margin-bottom: 32px;
`