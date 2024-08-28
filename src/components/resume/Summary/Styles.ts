import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    padding: 0 var(--container) 32px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;        
    }
`;

export const SummaryText = styled.p`
    margin: 0 16px 0 0;
    font-size: 1.25rem;
`