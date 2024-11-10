import { Wrapper, ContactList, ContactItem, Link } from "./Contact.styled"
import { SVGIcon } from "../../common/SVGIcon/client.tsx"
import ContactProps from "../../../types/ContactProps.ts"
import { linkProps } from "../../../constants/linkprops"
import Element from "../../../types/ElementProps.ts"

interface ContactsProps extends Element {
	contacts: ContactProps[]
}

const Contacts = ({ contacts, lng }: ContactsProps) => {
	const showContactInfo = (contact: ContactProps, index: number) => {
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

export default Contacts
