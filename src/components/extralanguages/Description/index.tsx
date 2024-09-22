import { DescriptionWrapper, Title, Summary } from "./Description.styled"
import { useTranslation } from "react-i18next"

const Description = () => {
	const { t } = useTranslation()
	return (
		<DescriptionWrapper>
			<Title>{t("extralanguages.title")}</Title>
			<Summary>{t("extralanguages.summary")}</Summary>
		</DescriptionWrapper>
	)
}

export default Description
