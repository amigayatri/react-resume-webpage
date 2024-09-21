import { Wrapper, LinkInternal, ButtonStyle, Label } from "./Styles"
import { Page } from "../../../constants/links"
import { useTranslation } from "react-i18next"
import SVGIcon from "../../../icons/SVGIcon"

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