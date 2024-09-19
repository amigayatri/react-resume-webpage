import { Wrapper, LinkExternal, LinkInternal } from "./Styles"
import { Page, External } from "../../../constants/links"
import { useTranslation } from 'react-i18next';
import { SVGIcon } from "../../global/SVGIcon/SVGIcon"

export const PageLink = ({ page }: { page: Page }) => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<SVGIcon size={page.icon?.size || 0} id={page.icon?.id || ""} />
			<LinkInternal to={page.path}>
				{t(`home.pageList.${page.name}.title`)}
			</LinkInternal>
		</Wrapper>
	)
}

export const ExternalLink = ({ link }: { link: External }) => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<SVGIcon size={link.icon?.size || 0} id={link.icon?.id || ""} />
			<LinkExternal rel="noopener" target="_blank" href={link.path}>
				{t(`home.externalLinks.${link.name}`)}
			</LinkExternal>
		</Wrapper>
	)
}