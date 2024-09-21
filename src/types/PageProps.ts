import IconProps from "./IconProps"
import { ReactElement } from "react"

export default interface PageProps {
	path: string
	element: ReactElement
	name: string
	isHome: boolean
	icon?: IconProps
}
