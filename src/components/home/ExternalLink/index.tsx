import { useTranslation } from "react-i18next"
import SVGIcon from "../../../icons/SVGIcon"
import { ButtonStyle, Label } from "../Common.styled"
import { ExternalLinkTag, LabelWrapper } from "./ExternalLink.styled"
import ExternalLinkProps from "../../../types/ExternalLinkProps"

const ExternalLink = ({ link }: { link: ExternalLinkProps }) => {
	const { t } = useTranslation()
	return (
		<ExternalLinkTag rel="noopener" target="_blank" href={link.path}>
			<ButtonStyle>
				<SVGIcon size={48} id={link.icon} />
				<LabelWrapper>
					<Label>{t(`home.externalLinks.${link.name}`)}</Label>
					<SVGIcon id="external" size={20} />
				</LabelWrapper>
			</ButtonStyle>
		</ExternalLinkTag>
	)
}

export default ExternalLink
