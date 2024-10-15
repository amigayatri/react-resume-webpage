import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import SVGIcon from "../../../../icons/SVGIcon"
import PageProps from "../../../../types/PageProps"
import {
	ContentWrapper,
	Label,
	LinkWrapper,
	UnderLine
} from "./NavigationItem.styled"

interface NavigationItemProps {
	page: PageProps
	isRTL: boolean
	close: () => void
}

const NavigationItem = ({ page, isRTL, close }: NavigationItemProps) => {
	const { t } = useTranslation()
	const { pathname } = useLocation()
	const isActive = pathname === page.path
	return (
		<LinkWrapper $isActive={isActive}>
			<ContentWrapper onClick={close} $isRTL={isRTL} to={page.path}>
				<SVGIcon id={page.icon} size={24} />
				<Label>{t("paths.title.".concat(page.id))}</Label>
			</ContentWrapper>
			<UnderLine />
		</LinkWrapper>
	)
}

export default NavigationItem
