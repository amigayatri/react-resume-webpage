import { useTranslation } from "react-i18next"
import SVGIcon from "../../../icons/SVGIcon"
import { ButtonStyle, ButtonWrapper, Label } from "../Common.styled"
import { ExternalLinkTag, LabelWrapper } from "./ExternalLink.styled"
import ExternalLinkProps from "../../../types/ExternalLinkProps"
import linkProps from "../../../constants/linkprops"

const ExternalLink = ({
	link,
	isRTL
}: {
	link: ExternalLinkProps
	isRTL: boolean
}) => {
	const { t } = useTranslation()
	return (
		<ButtonWrapper>
			<ExternalLinkTag {...linkProps} href={link.path}>
				<ButtonStyle $isRTL={isRTL}>
					<SVGIcon noTransition local="home" size={48} id={link.icon} />
					<LabelWrapper $isRTL={isRTL}>
						<Label>{t(`home.externalLinks.${link.name}`)}</Label>
						<SVGIcon noTransition local="home" id="external" size={20} />
					</LabelWrapper>
				</ButtonStyle>
			</ExternalLinkTag>
		</ButtonWrapper>
	)
}

export default ExternalLink
