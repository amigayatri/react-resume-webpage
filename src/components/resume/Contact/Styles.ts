import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.background};

    @media (max-width: 1024px) {
        transform: none;
        margin: 0 0 16px;
    }        
`;

export const ContactList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

export const ContactItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 4px;
    color: ${({ theme }) => theme.primary};
`

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 1.25rem;
    }
`