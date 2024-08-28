import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    width: 100%;
    padding: 16px;
    text-align: center;

    
    @media print {
        display: none;
    }
`;