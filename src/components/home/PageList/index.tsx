import { Wrapper, ListWrapper } from "./PageList.styled"
import ExternalLink from "../ExternalLink"
import InternalLink from "../InternalLink"
import externals from "../../../constants/externals"
import PageProps from "../../../types/PageProps"
import ExternalLinkProps from "../../../types/ExternalLinkProps"
import { allPages } from "../../../constants/pages"

const PageList = () => {
	return (
		<Wrapper>
			<ListWrapper>
				{allPages.map(
					(page: PageProps, index: number) =>
						!page.isHome && (
							<InternalLink key={"page-item-number-" + index} page={page} />
						)
				)}
				{externals.map((external: ExternalLinkProps, index: number) => (
					<ExternalLink link={external} key={"external-item-number-" + index} />
				))}
			</ListWrapper>
		</Wrapper>
	)
}

export default PageList
