import { Icon } from "./index"

interface Contact {
	text: string
	icon: Icon
	link: string
	showOnWeb: boolean
}

export const contacts: Contact[] = [
	{
		icon: { id: "phone", size: 24 },
		text: "+55 21 993945805",
		link: "tel:+5521993945805",
		showOnWeb: true
	},
	{
		icon: { id: "email", size: 24 },
		text: "miragayatri@gmail.com",
		link: "mailto:miragayatri@gmail.com",
		showOnWeb: true
	},
	{
		icon: { id: "linkedin", size: 24 },
		text: "linkedin.com/in/amiragayatri",
		link: "https://linkedin.com/in/amiragayatri",
		showOnWeb: true
	},
	{
		icon: { id: "website", size: 24 },
		text: "amiragayatri.dev",
		link: "https://amiragayatri.dev",
		showOnWeb: false
	}
]
