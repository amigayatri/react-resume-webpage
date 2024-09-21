import { contacts } from "../../../constants/contacts"
import { Wrapper, ContactList, ContactItem, Link } from "./Contact.styled"
import SVGIcon from "../../../icons/SVGIcon"
import ContactProps from "../../../types/ContactProps"

const Contacts = () => {
	const showContactInfo = (contact: ContactProps, index: number) => {
		return (
			<ContactItem
				$i={index}
				$showOnWeb={contact.showOnWeb}
				key={"contact-" + index}
			>
				<SVGIcon size={24} i={index} id={contact.icon.id} />
				<Link href={contact.link} rel="noopener" target="_blank">
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

export default Contacts
