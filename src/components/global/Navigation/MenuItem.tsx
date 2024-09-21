import { useTranslation } from "react-i18next"
import { LinkWrapper, LinkNav } from "./NavigationMenu.styled"

interface NavigationProps {
	name: string
	path: string
	isActive: boolean
}

const NavigationItem = ({ name, path, isActive }: NavigationProps) => {
	const { t } = useTranslation()
	return (
		<LinkWrapper>
			<LinkNav to={path} $isActive={isActive}>
				{t("paths.title.".concat(name))}
			</LinkNav>
		</LinkWrapper>
	)
}

export default NavigationItem
