import { useTranslation } from "react-i18next";
import { Wrapper, SummaryText } from "./Summary.styled.ts"

const Summary = () => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<SummaryText>{t("resume.summary.text")}</SummaryText>
		</Wrapper>
	)
}

export default Summary