import { Wrapper, ListWrapper } from "./PageList.styled"
import ExternalLink from "../ExternalLink"
import InternalLink from "../InternalLink"
import externals from "../../../constants/externals"
import pages from "../../../constants/pages"
import PageProps from "../../../types/PageProps"
import ExternalLinkProps from "../../../types/ExternalLinkProps"

const PageList = () => {
	const createLink = (page: PageProps, i: number) => {
		if (page.isHome) return
		return <InternalLink key={"page-item-number-" + i} page={page} />
	}
	const createExternalLink = (external: ExternalLinkProps, i: number) => {
		return <ExternalLink link={external} key={"external-item-number-" + i} />
	}
	return (
		<Wrapper>
			<ListWrapper>
				{pages.map((page, index) => createLink(page, index))}
				{externals.map((external, index) =>
					createExternalLink(external, index)
				)}
			</ListWrapper>
		</Wrapper>
	)
}

export default PageList
