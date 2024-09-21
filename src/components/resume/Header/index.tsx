import { useTranslation } from "react-i18next"
import { HeaderWrapper, Name, SubHeading } from "./Header.styled"

const Header = () => {
	const { t } = useTranslation()

	return (
		<HeaderWrapper>
			<Name>{t("resume.header.name")}</Name>
			<SubHeading>{t("resume.header.subheading")}</SubHeading>
		</HeaderWrapper>
	)
}

export default Header
