import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { contacts } from "../../constants";

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.background};

    @media (max-width: 1024px) {
        transform: none;
        margin: 0 0 16px;
    }        
`;

const ContactList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const ContactItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 4px;
    color: ${({ theme }) => theme.primary};
`

const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 1.25rem;
    }
`

export const Contacts = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <ContactList>
                {contacts.map((contact, index) => {
                    return (
                    <ContactItem key={"contact-" + index}>
                        <Icon src={contact.icon.src} alt={t(contact.icon.alt)} />
                        <Link href={contact.link} rel="noopener" target="_blank">{contact.text}</Link>
                    </ContactItem>)
                })}
                        
            </ContactList>
        </Wrapper>
    );
}