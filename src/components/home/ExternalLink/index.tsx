import { useTranslation } from "react-i18next"
import SVGIcon from "../../../icons/SVGIcon"
import { ButtonStyle, Label } from "../Common.styled"
import { ExternalLinkTag } from "./ExternalLink.styled"
import ExternalLinkProps from "../../../types/ExternalLinkProps"

const ExternalLink = ({ link }: { link: ExternalLinkProps }) => {
	const { t } = useTranslation()

	return (
		<ExternalLinkTag rel="noopener" target="_blank" href={link.path}>
			<ButtonStyle>
				<SVGIcon size={link.icon?.size || 0} id={link.icon?.id || ""} />
				<Label>{t(`home.externalLinks.${link.name}`)}</Label>
			</ButtonStyle>
		</ExternalLinkTag>
	)
}

export default ExternalLink
