import {
	Wrapper,
	LinkExternal,
	ButtonStyle,
	Label
} from "./ExternalLink.styled"

import { ExternalLinkProps } from "../../../constants/links"
import { useTranslation } from "react-i18next"
import SVGIcon from "../../../icons/SVGIcon"

const ExternalLink = ({ link }: { link: ExternalLinkProps }) => {
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

export default ExternalLink
