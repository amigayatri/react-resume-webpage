import { useTranslation } from "react-i18next"
import { HeaderWrapper, Title, SubHeading } from "./Header.styled"

const Header = () => {
	const { t } = useTranslation()

	return (
		<HeaderWrapper>
			<Title>{t("home.header.name")}</Title>
			<SubHeading>{t("home.header.subheading")}</SubHeading>
		</HeaderWrapper>
	)
}

export default Header
