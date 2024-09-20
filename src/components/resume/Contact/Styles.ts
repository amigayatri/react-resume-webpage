import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.background};
    position: relative;
    padding: 0 0 32px;
    width: fit-content;
    margin: 0 auto 16px;

    @media (max-width: 1024px) {
        transform: none;
        margin: 0 var(--container) 8px;
    }        
`;

export const ContactList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    
    @media (max-width: 1024px) {
        position: relative;
        flex-direction: column;
    }

    @media print {
        position: relative;
        flex-direction: column;
    }
`

export const ContactItem = styled.li<{$showOnWeb: boolean, $i: number}>`
    display: ${props => props.$showOnWeb? 'flex' : 'none'};
    margin-left: 32px;
    border: 1px solid ${props => props.$i&1? props.theme.secondAccent : props.theme.accent};
    padding: 4px 8px;
    border-radius: 8px;
    max-width: fit-content;

    @media (min-width: 1024px) {
        justify-content: flex-start;
        align-items: center;
        &:first-of-type {
            margin-left: 0;
        }
    }
    @media (max-width: 1024px) {
        margin: 8px 0;
        justify-content: flex-start;
        align-items: flex-start;
        &:first-of-type{
            margin-top: 0;
        }
    }
    
    @media print {
        display: flex;
    }
`

export const Link = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.primary};
	font-size: 1.125rem;
	text-wrap: nowrap;
	display: inline-block;
	margin: 0;
	margin-left: 8px;
	max-width: auto;

	@media (max-width: 400px) {
		text-wrap: wrap;
		max-width: 320px;
	}
`