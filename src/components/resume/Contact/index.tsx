import { Wrapper, ContactList, ContactItem, Link } from "./Contact.styled"
import { SVGIcon } from "../../common/"
import { linkProps } from "../../../constants/linkprops"
import { ContactsElementProps, showContactInfoType } from "../types.ts"

export const Contacts = ({ contacts, lng }: ContactsElementProps) => {
	const showContactInfo: showContactInfoType = (contact, index) => {
		return (
			<ContactItem
				$i={index}
				$showOnWeb={contact.showOnWeb}
				key={"contact-" + index}
			>
				<SVGIcon lng={lng} local="resume" size={24} id={contact.icon} />
				<Link href={contact.link} {...linkProps}>
					{contact.text}
				</Link>
			</ContactItem>
		)
	}
	return (
		<Wrapper>
			<ContactList>
				{contacts.map((contact, index) => showContactInfo(contact, index))}
			</ContactList>
		</Wrapper>
	)
}