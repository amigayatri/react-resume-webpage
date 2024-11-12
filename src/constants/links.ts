import Link from "../types/common/LinkProps"

export const pages: Link[] = [
	{
		path: "",
		key: "home",
		icon: "home",
		isExternal: false
	},
	{
		path: "resume",
		key: "resume",
		icon: "profile",
		isExternal: false
	}
]

export const extraPages: Link[] = [
	{
		path: "cats",
		key: "cats",
		icon: "bastet",
		isExternal: false
	},
	{
		path: "palette",
		key: "palette",
		icon: "pantone",
		isExternal: false
	},
	{
		path: "stats",
		key: "stats",
		icon: "chart",
		isExternal: false
	},
	{
		path: "icons",
		key: "icons",
		icon: "egyptianwalk",
		isExternal: false
	},
	{
		path: "feriados",
		key: "holidays",
		icon: "braziliancalendar",
		isExternal: false
	},
	{
		path: "colors",
		key: "colors",
		icon: "palette",
		isExternal: false
	},
	{
		path: "brasil",
		key: "brasil",
		icon: "brasil",
		isExternal: false
	}
]

export const links: Link[] = [
	...pages,
	{
		path: "https://linkedin.com/in/amiragayatri",
		key: "external.linkedin",
		icon: "linkedin",
		isExternal: true
	},
	{
		path: "https://github.com/amigayatri/react-resume-webpage",
		key: "external.github",
		icon: "github",
		isExternal: true
	},
	...extraPages
]
