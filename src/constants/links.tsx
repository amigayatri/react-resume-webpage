import Home from "../pages/Home"
import Resume from "../pages/Resume"
import Colors from "../pages/Colors"
import { ReactElement } from "react"
import { Icon } from "./index"

export interface PageProps {
	pageId: string
}
export interface Page {
	path: string
	element: ReactElement
	name: string
	isHome: boolean
	icon?: Icon
}

export interface ExternalLinkProps {
	path: string
	name: string
	icon: Icon
}

export const externals: ExternalLinkProps[] = [
	{
		path: "https://linkedin.com/in/amiragayatri",
		name: "linkedin",
		icon: {
			id: "linkedinH",
			size: 48
		}
	},
	{
		path: "https://github.com/amigayatri/react-resume-webpage",
		name: "github",
		icon: {
			id: "github",
			size: 48
		}
	}
]

export const pages: Page[] = [
	{
		path: "/",
		element: <Home pageId="home" />,
		name: "home",
		isHome: true
	},
	{
		path: "/resume/",
		element: <Resume pageId="resume" />,
		name: "resume",
		icon: {
			id: "resume",
			size: 48
		},
		isHome: false
	},
	{
		path: "/colors/",
		element: <Colors pageId="colors" />,
		name: "colors",
		icon: {
			id: "palette",
			size: 48
		},
		isHome: false
	}
]
