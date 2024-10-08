import { Wrapper, ListWrapper } from "./PageList.styled"
import ExternalLink from "../ExternalLink"
import InternalLink from "../InternalLink"
import externals from "../../../constants/externals"
import PageProps from "../../../types/PageProps"
import ExternalLinkProps from "../../../types/ExternalLinkProps"
import { allPages } from "../../../constants/pages"
import { useTranslation } from "react-i18next"
import { getLangDir } from "rtl-detect"

const PageList = () => {
	const { i18n } = useTranslation()
	const isRTL = getLangDir(i18n.language) === "rtl"
	return (
		<Wrapper>
			<ListWrapper>
				{allPages.map(
					(page: PageProps, index: number) =>
						!page.isHome && (
							<InternalLink
								isRTL={isRTL}
								key={"page-item-number-" + index}
								page={page}
							/>
						)
				)}
				{externals.map((external: ExternalLinkProps, index: number) => (
					<ExternalLink
						isRTL={isRTL}
						link={external}
						key={"external-item-number-" + index}
					/>
				))}
			</ListWrapper>
		</Wrapper>
	)
}

export default PageList
