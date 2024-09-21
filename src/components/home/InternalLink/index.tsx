import { InternalLinkTag } from "./InternalLink.styled"
import { ButtonStyle, Label } from "../Common.styled"
import PageProps from "../../../types/PageProps"
import SVGIcon from "../../../icons/SVGIcon"
import { useTranslation } from "react-i18next"

const InternalLink = ({ page }: { page: PageProps }) => {
	const { t } = useTranslation()

	return (
		<InternalLinkTag to={page.path}>
			<ButtonStyle>
				<SVGIcon size={page.icon?.size || 0} id={page.icon?.id || ""} />
				<Label> {t(`home.pageList.${page.name}.title`)}</Label>
			</ButtonStyle>
		</InternalLinkTag>
	)
}

export default InternalLink
