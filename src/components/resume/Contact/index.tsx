import { Wrapper, ContactList, ContactItem, Link } from "./Contact.styled"
import SVGIcon from "../../../icons/SVGIcon"
import ContactProps from "../../../types/ContactProps"
import { getLangDir } from "rtl-detect"
import { useTranslation } from "react-i18next"
import linkProps from "../../../constants/linkprops"

interface ContactsProps {
	contacts: ContactProps[]
}

const Contacts = ({ contacts }: ContactsProps) => {
	const showContactInfo = (contact: ContactProps, index: number) => {
		return (
			<ContactItem
				$i={index}
				$showOnWeb={contact.showOnWeb}
				key={"contact-" + index}
			>
				<SVGIcon size={24} id={contact.icon} />
				<Link href={contact.link} {...linkProps}>
					{contact.text}
				</Link>
			</ContactItem>
		)
	}
	const { i18n } = useTranslation()
	const isRTL = getLangDir(i18n.language) === "rtl"
	return (
		<Wrapper $isRTL={isRTL}>
			<ContactList $isRTL={isRTL}>
				{contacts.map((contact, index) => showContactInfo(contact, index))}
			</ContactList>
		</Wrapper>
	)
}

export default Contacts
