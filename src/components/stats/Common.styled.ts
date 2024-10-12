import styled from "styled-components"

export const Title = styled.h2`
	font-size: 1.75rem;
	color: ${({ theme }) => theme.pink};
`

export const Subtitle = styled.h3`
	color: ${({ theme }) => theme.blue};
	margin: 16px 0;
	text-transform: capitalize;
	font-size: 1.5rem;
`

export const Summary = styled.summary`
	margin: 0;
`
