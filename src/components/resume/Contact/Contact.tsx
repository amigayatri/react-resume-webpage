import { contacts } from "../../../constants/contacts";
import { Wrapper, ContactList, ContactItem, Link } from "./Styles";
import { SVGIcon } from "../../global/SVGIcon/SVGIcon";

export const Contacts = () => {
    return (
        <Wrapper>
            <ContactList>
                {contacts.map((contact, index) => {
                    return (
                    <ContactItem $i={index} $showOnWeb={contact.showOnWeb} key={"contact-" + index}>
                        <SVGIcon size={24} i={index} id={contact.icon.id} />
                        <Link href={contact.link} rel="noopener" target="_blank">{contact.text}</Link>
                    </ContactItem>)
                })}
            </ContactList>
        </Wrapper>
    );
}