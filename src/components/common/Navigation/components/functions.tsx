import React from "react"
import { LinkProps } from "../../../../types/common"
import { NavProps } from "../NavigationBase"
import { NavigationItem } from "./NavigationItem"

type printLinks = (
	page: LinkProps,
	props: NavProps,
	isMobile: boolean
) => React.ReactElement | React.ReactElement[]

type printSimpleLink = (
	page: LinkProps,
	props: NavProps,
	isMobile: boolean,
	isSublink?: boolean
) => React.ReactElement
const printSimpleLink: printSimpleLink = (page, props, isMobile, isSublink) => {
	return (
		<NavigationItem
			{...props}
			key={`nav-link-${page.path}`}
			link={page}
			hasUnderline={!isMobile}
			isSublink={isSublink === true}
		/>
	)
}

export const printLinks: printLinks = (page, props, isMobile) => {
	const { sublinks } = page
	const MainLink = printSimpleLink(page, props, isMobile)
	if (sublinks === undefined) {
		return MainLink
	} else {
		const SubLinkArr = sublinks.map((sub) =>
			printSimpleLink(sub, props, isMobile, true)
		)
		return [MainLink, ...SubLinkArr]
	}
}
