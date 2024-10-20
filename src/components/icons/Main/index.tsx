import { useTranslation } from "react-i18next"
import IconList from "../IconList"
import { MainWrapper, Title } from "./Main.styled"

const Main = () => {
	const { t } = useTranslation()
	return (
		<MainWrapper>
			<Title>{t("iconlist.title")}</Title>
			<IconList />
		</MainWrapper>
	)
}

export default Main
