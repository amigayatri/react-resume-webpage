import styled from "styled-components";

export const HeaderWrapper = styled.header`
    padding: 16px var(--container);
    position: relative;
`;

export const Name = styled.h1`
	font-family: "Fira code", monospace;
	color: ${({ theme }) => theme.accent};
	margin: 0;
	line-height: 1;
`

export const SubHeading = styled.h2`
    font-family: 'Fira code', monospace;
    font-weight: 500;
    font-style: italic;
    margin: 8px 0 0;
    line-height: 1;
`