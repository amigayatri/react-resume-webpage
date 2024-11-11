import { StatsWrapper, TabName, TabNamesWrapper } from "./Stats.styled.ts"
import BaseElement from "../../../types/common/BaseElementProps.ts"
import GitStats from "../Git"
import { TabPanel, Tabs } from "react-tabs"
import { MainTitle } from "../Common.styled"

export const StatsBase = ({ lng, t }: BaseElement) => {
	const tabs = new Map([["git", <GitStats t={t} lng={lng} />]])
	const names = Array.from(tabs.keys())
	const entries = Array.from(tabs.entries())
	return (
		<StatsWrapper>
			<MainTitle>{t("main.title")}</MainTitle>
			<Tabs>
				<TabNamesWrapper>
					{names.map((id) => (
						<TabName key={"list-stats-tabName-" + id}>
							{t("main.list." + id)}
						</TabName>
					))}
				</TabNamesWrapper>
				{entries.map(([name, el]) => (
					<TabPanel key={"key-list-" + name}>{el}</TabPanel>
				))}
			</Tabs>
		</StatsWrapper>
	)
}
