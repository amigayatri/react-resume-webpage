import styled from "styled-components"

export const Title = styled.h2`
	color: ${({ theme }) => theme.accent};
	margin: 16px var(--color-container);
`

export const Subtitle = styled.h3`
	color: ${({ theme }) => theme.secondAccent};
	margin: 16px 0;
`

export const Summary = styled.summary`
	margin: 0;
`
