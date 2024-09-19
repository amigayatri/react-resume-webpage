import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: #212117;
    color: #F7F7F7;
    border-top: 1px solid #F7F7F7;
    width: 100%;
    padding: 16px;
    text-align: center;
    
    @media print {
        display: none;
    }
`;

export const Name = styled.span`
    color: ${({theme}) => theme.secondAccent};
`

export const Link = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.accent};
`