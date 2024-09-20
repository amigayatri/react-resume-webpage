import { Wrapper, ListWrapper } from "./Styles"
import { Page, pages, externals, External } from "../../../constants/links"
import { PageLink, ExternalLink } from "../Link/Link"

export const PageList = () => {
	const createLink = (page: Page, i: number) => {
		if (page.isHome) return
		return <PageLink key={'page-item-number-'+i} page={page} />
	}
	const createExternalLink = (external: External, i: number) => {
		return <ExternalLink link={external} key={'external-item-number-'+i} />
	}
	return (
		<Wrapper>
			<ListWrapper>
				{pages.map((page, index) => createLink(page, index))}
				{externals.map((external, index) => createExternalLink(external, index))}
			</ListWrapper>
		</Wrapper>
	)
}
