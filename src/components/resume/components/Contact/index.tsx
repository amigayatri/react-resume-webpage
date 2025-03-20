import { linkProps } from "../../../../constants/linkprops"
import { SVGIcon } from "../../../common/"
import { ContactsElementProps, showContactInfo } from "../../types.ts"
import { ContactItem, ContactList, Link, Wrapper } from "./Contact.styled"

export const Contacts = ({ contacts, lng }: ContactsElementProps) => {
    const showContactInfo: showContactInfo = (contact, index) => {
        return (
            <ContactItem $i={index} $showOnWeb={contact.showOnWeb} key={"contact-" + index}>
                <SVGIcon lng={lng} local="resume" size={24} id={contact.icon} />
                <Link href={contact.link} {...linkProps}>
                    {contact.text}
                </Link>
            </ContactItem>
        )
    }
    return (
        <Wrapper>
            <ContactList>{contacts.map((contact, index) => showContactInfo(contact, index))}</ContactList>
        </Wrapper>
    )
}
