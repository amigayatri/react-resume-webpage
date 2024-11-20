import { LinkProps } from "../types/common/"

export const pages: LinkProps[] = [
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

export const brazilianLinks: LinkProps[] = [
	{
		path: "brasil/mapa",
		key: "map",
		icon: "map",
		isExternal: false
	},
	{
		path: "brasil/feriados",
		key: "holidays",
		icon: "calendariobrasileiro",
		isExternal: false
	}
]

export const colorLinks: LinkProps[] = [
	{
		path: "colors/palettes",
		key: "palette",
		icon: "pantone",
		isExternal: false
	},
	{
		path: "colors/shades",
		key: "shades",
		icon: "palette",
		isExternal: false
	}
]

export const extraPages: LinkProps[] = [

	{
		path: "musics",
		key: "music",
		icon: "music",
		isExternal: false
	},{
		path: "cats",
		key: "cats",
		icon: "bastet",
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
		path: "colors",
		key: "colors",
		icon: "rainbow",
		isExternal: false,
		sublinks: colorLinks
	},
	{
		path: "brasil",
		key: "brasil",
		icon: "brasil",
		isExternal: false,
		sublinks: brazilianLinks
	}
]

export const links: LinkProps[] = [
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
