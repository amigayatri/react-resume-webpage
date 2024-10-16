import { MainWrapper, Title } from "./Main.styled"
import Select from "../Select"
import { useTranslation } from "react-i18next"

const Main = () => {
	const { t } = useTranslation()
	return (
		<MainWrapper>
			<Title>{t("palettes.title")}</Title>
			<Select />
		</MainWrapper>
	)
}

export default Main
