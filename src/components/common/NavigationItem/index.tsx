import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import SVGIcon from "../../../icons/SVGIcon"
import PageProps from "../../../types/PageProps"
import {
	ContentWrapper,
	Label,
	LinkWrapper,
	UnderLine
} from "./NavigationItem.styled"

const NavigationItem = ({ page }: { page: PageProps }) => {
	const { t } = useTranslation()
	const { pathname } = useLocation()
	const isActive = pathname === page.path
	return (
		<LinkWrapper $isActive={isActive}>
			<ContentWrapper to={page.path}>
				<SVGIcon id={page.icon} size={24} />
				<Label>{t("paths.title.".concat(page.id))}</Label>
			</ContentWrapper>
			<UnderLine />
		</LinkWrapper>
	)
}

export default NavigationItem
