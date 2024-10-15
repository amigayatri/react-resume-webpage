import { MainWrapper, TabName, TabNamesWrapper } from "./Main.styled"
import VisitorStats from "../VisitorStats"
import GitStats from "../Git"
import { TabPanel, Tabs } from "react-tabs"
import { MainTitle } from "../Common.styled"
import { useTranslation } from "react-i18next"

const Main = () => {
	const { t } = useTranslation()
	const tabs = new Map([
		["visitors", <VisitorStats />],
		["git", <GitStats />]
	])
	const names = Array.from(tabs.keys())
	const elements = Array.from(tabs.values())
	return (
		<MainWrapper>
			<MainTitle>{t("stats.main.title")}</MainTitle>
			<Tabs>
				<TabNamesWrapper>
					{names.map((id) => (
						<TabName key={"list-stats-tabName-" + id}>
							{t("stats.main.list." + id)}
						</TabName>
					))}
				</TabNamesWrapper>
				{elements.map((el) => (
					<TabPanel>{el}</TabPanel>
				))}
			</Tabs>
		</MainWrapper>
	)
}

export default Main
