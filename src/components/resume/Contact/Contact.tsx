import { useTranslation } from "react-i18next";
import { contacts } from "../../../constants";
import { Wrapper, ContactList, ContactItem, Link } from "./Styles";
import { ContactIcon } from "./Icons";

export const Contacts = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <ContactList>
                {contacts.map((contact, index) => {
                    return (
                    <ContactItem $i={index} $showOnWeb={contact.showOnWeb} key={"contact-" + index}>
                        <ContactIcon i={index} id={contact.icon.id} alt={t(contact.icon.alt)} />
                        <Link href={contact.link} rel="noopener" target="_blank">{contact.text}</Link>
                    </ContactItem>)
                })}
            </ContactList>
        </Wrapper>
    );
}