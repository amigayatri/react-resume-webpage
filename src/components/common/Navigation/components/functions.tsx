import React from "react"
import { LinkProps } from "../../../../types/common"
import { NavProps } from "../NavigationBase"
import { NavigationItem } from "./NavigationItem"

type printLinks = (
	page: LinkProps,
	props: NavProps
) => React.ReactElement | React.ReactElement[]
export type handleLink = (
	page: LinkProps
) => React.ReactElement | React.ReactElement[]

type printSimpleLink = (
	page: LinkProps,
	props: NavProps,
	isSublink?: boolean
) => React.ReactElement
const printSimpleLink: printSimpleLink = (page, props, isSublink) => {
	return (
		<NavigationItem
			{...props}
			key={`nav-link-${page.path}`}
			link={page}
			isSublink={isSublink === true}
		/>
	)
}

export const printLinks: printLinks = (page, props) => {
	const { sublinks } = page
	const MainLink = printSimpleLink(page, props)
	if (sublinks === undefined) {
		return MainLink
	} else {
		const SubLinkArr = sublinks.map((sub) => printSimpleLink(sub, props, true))
		return [MainLink, ...SubLinkArr]
	}
}
