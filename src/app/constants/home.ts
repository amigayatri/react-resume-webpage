import Link from "../types/LinkProps"

export const pages: Link[] = [
	{
		path: "/",
		key: "home.pageList.home.title",
		icon: "home",
		isExternal: false
	},
	{
		path: "resume",
		key: "home.pageList.resume.title",
		icon: "profile",
		isExternal: false
	}
]

export const extraPages: Link[] = [
	{
		path: "cats",
		key: "home.pageList.cats.title",
		icon: "bastet",
		isExternal: false
	},
	{
		path: "palette",
		key: "home.pageList.palette.title",
		icon: "pantone",
		isExternal: false
	},
	{
		path: "palette",
		key: "home.pageList.palette.title",
		icon: "pantone",
		isExternal: false
	},
	{
		path: "site-stats",
		key: "home.pageList.sitestats.title",
		icon: "chart",
		isExternal: false
	},
	{
		path: "leetcode",
		key: "home.pageList.leetcode.title",
		icon: "leetcode",
		isExternal: false
	},
	{
		path: "icons",
		key: "home.pageList.iconlist.title",
		icon: "grid",
		isExternal: false
	},
	{
		path: "feriados",
		key: "home.pageList.brazilianHolidays.title",
		icon: "braziliancalendar",
		isExternal: false
	},
	{
		path: "extra-languages",
		key: "home.pageList.extralanguages.title",
		icon: "translate",
		isExternal: false
	},
	{
		path: "colors",
		key: "home.pageList.colors.title",
		icon: "palette",
		isExternal: false
	},
	{
		path: "brasil",
		key: "home.pageList.brasil.title",
		icon: "brasil",
		isExternal: false
	}
]

export const links: Link[] = [
	...pages
	// {
	// 	path: "https://linkedin.com/in/amiragayatri",
	// 	key: "home.externalLinks.linkedin",
	// 	icon: "linkedin",
	// 	isExternal: true
	// },
	// {
	// 	path: "https://github.com/amigayatri/react-resume-webpage",
	// 	key: "home.externalLinks.github",
	// 	icon: "github",
	// 	isExternal: true
	// }
]
