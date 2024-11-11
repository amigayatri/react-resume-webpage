import Link from "../types/common/LinkProps"

export const pages: Link[] = [
	{
		path: "",
		key: "pageList.home.title",
		icon: "home",
		isExternal: false
	},
	{
		path: "resume",
		key: "pageList.resume.title",
		icon: "profile",
		isExternal: false
	}
]

export const extraPages: Link[] = [
	{
		path: "cats",
		key: "pageList.cats.title",
		icon: "bastet",
		isExternal: false
	},
	{
		path: "palette",
		key: "pageList.palette.title",
		icon: "pantone",
		isExternal: false
	},
	{
		path: "site-stats",
		key: "pageList.sitestats.title",
		icon: "chart",
		isExternal: false
	},
	{
		path: "leetcode",
		key: "pageList.leetcode.title",
		icon: "leetcode",
		isExternal: false
	},
	{
		path: "icons",
		key: "pageList.iconlist.title",
		icon: "egyptianwalk",
		isExternal: false
	},
	{
		path: "feriados",
		key: "pageList.brazilianHolidays.title",
		icon: "braziliancalendar",
		isExternal: false
	},
	{
		path: "colors",
		key: "pageList.colors.title",
		icon: "palette",
		isExternal: false
	},
	{
		path: "brasil",
		key: "pageList.brasil.title",
		icon: "brasil",
		isExternal: false
	}
]

export const links: Link[] = [
	...pages,
	{
		path: "https://linkedin.com/in/amiragayatri",
		key: "externalLinks.linkedin",
		icon: "linkedin",
		isExternal: true
	},
	{
		path: "https://github.com/amigayatri/react-resume-webpage",
		key: "externalLinks.github",
		icon: "github",
		isExternal: true
	},
	...extraPages
]
