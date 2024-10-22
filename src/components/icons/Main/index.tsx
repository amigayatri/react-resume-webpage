import { useTranslation } from "react-i18next"
import IconList from "../IconList"
import { MainWrapper, Title } from "./Main.styled"
import { numberOfIcons } from "../../../constants/icons-map"

const Main = () => {
	const { t } = useTranslation()
	return (
		<MainWrapper>
			<Title>
				{t("iconlist.title")} ({numberOfIcons})
			</Title>
			<IconList />
		</MainWrapper>
	)
}

export default Main
