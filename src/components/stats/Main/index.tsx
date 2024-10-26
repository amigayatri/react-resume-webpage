import { MainWrapper } from "./Main.styled"
import GitStats from "../Git"
// import { TabPanel, Tabs } from "react-tabs"
// import { MainTitle } from "../Common.styled"
// import { useTranslation } from "react-i18next"

const Main = () => {
	//const { t } = useTranslation()
	//const tabs = new Map([["git", <GitStats />]])
	// const names = Array.from(tabs.keys())
	// const entries = Array.from(tabs.entries())
	return (
		<MainWrapper>
			<GitStats />
			{/* <MainTitle>{t("stats.main.title")}</MainTitle>
			<Tabs>
				<TabNamesWrapper>
					{names.map((id) => (
						<TabName key={"list-stats-tabName-" + id}>
							{t("stats.main.list." + id)}
						</TabName>
					))}
				</TabNamesWrapper>
				{entries.map(([name, el]) => (
					<TabPanel key={"key-list-" + name}>{el}</TabPanel>
				))}
			</Tabs> */}
		</MainWrapper>
	)
}

export default Main
