import { useTranslation } from "react-i18next"
import { HeaderWrapper, Title } from "./Header.styled"

const Header = () => {
	const { t } = useTranslation()
	return (
		<HeaderWrapper>
			<Title>{t("leetcode.heatmap.title")}</Title>
		</HeaderWrapper>
	)
}

export default Header
