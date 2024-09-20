import {
	Wrapper,
	LinkExternal,
	LinkInternal,
	ButtonStyle,
	Label
} from "./Styles"
import { Page, External } from "../../../constants/links"
import { useTranslation } from "react-i18next"
import { SVGIcon } from "../../global/SVGIcon/SVGIcon"

export const PageLink = ({ page }: { page: Page }) => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<LinkInternal to={page.path}>
				<ButtonStyle>
					<SVGIcon size={page.icon?.size || 0} id={page.icon?.id || ""} />
					<Label> {t(`home.pageList.${page.name}.title`)}</Label>
				</ButtonStyle>
			</LinkInternal>
		</Wrapper>
	)
}

export const ExternalLink = ({ link }: { link: External }) => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<LinkExternal rel="noopener" target="_blank" href={link.path}>
				<ButtonStyle>
					<SVGIcon size={link.icon?.size || 0} id={link.icon?.id || ""} />
					<Label>{t(`home.externalLinks.${link.name}`)}</Label>
				</ButtonStyle>
			</LinkExternal>
		</Wrapper>
	)
}
