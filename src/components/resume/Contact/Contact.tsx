import { useTranslation } from "react-i18next";
import { contacts } from "../../../constants";
import { Wrapper, ContactList, ContactItem, Icon, Link } from "./Styles";


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