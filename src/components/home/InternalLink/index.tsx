import { InternalLinkTag } from "./InternalLink.styled"
import { ButtonStyle, Label } from "../Common.styled"
import PageProps from "../../../types/PageProps"
import SVGIcon from "../../../icons/SVGIcon"
import { useTranslation } from "react-i18next"

const InternalLink = ({ page, isRTL }: { page: PageProps; isRTL: boolean }) => {
	const { t } = useTranslation()

	return (
		<InternalLinkTag to={page.path}>
			<ButtonStyle $isRTL={isRTL}>
				<SVGIcon size={48} id={page.icon} />
				<Label> {t(`home.pageList.${page.id}.title`)}</Label>
			</ButtonStyle>
		</InternalLinkTag>
	)
}

export default InternalLink
