import styled from "styled-components"

export const MainTitle = styled.h1`
	font-size: 2rem;
	color: ${({ theme }) => theme.purple};
	margin: 0px var(--color-container);
`

export const Title = styled.h2`
	font-size: 1.75rem;
	color: ${({ theme }) => theme.pink};
`

export const Subtitle = styled.h2`
	color: ${({ theme }) => theme.blue};
	margin: 16px 0;
	text-transform: capitalize;
	font-size: 1.5rem;
`

export const Summary = styled.summary`
	margin: 0;
`
