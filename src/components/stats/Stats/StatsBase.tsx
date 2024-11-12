import { StatsWrapper, TabName, TabNamesWrapper } from "./Stats.styled.ts"
import BaseElement from "../../../types/common/BaseElementProps.ts"
import { GitStats } from "../Git/client.tsx"
import { LeetcodeStats } from "../Leetcode/client.tsx"
import { TabPanel, Tabs } from "react-tabs"
import { MainTitle } from "../Common.styled"
import { MulticoloredName } from "../../common/MulticoloredName/client.tsx"
import { useTheme } from "styled-components"
import { useState } from "react"

export const StatsBase = ({ lng, t }: BaseElement) => {
	const { pink, purple, blue } = useTheme()
	const customColors = [pink, purple, blue]
	const nameProps = {
		customColors,
		fontSize: 24,
		lng,
		legible: true,
		info: { group: "theme", name: "grayscalemonokai" },
		local: "stats"
	}
	const tabs = new Map([
		["leetcode", { el: <LeetcodeStats lng={lng} />, icon: "leetcode" }],
		["git", { el: <GitStats lng={lng} />, icon: "github" }]
	])
	const entries = Array.from(tabs.entries())
	const [selectedTab, setSelectedTab] = useState(entries[0][0])
	return (
		<StatsWrapper>
			<MainTitle>{t("title")}</MainTitle>
			<Tabs>
				<TabNamesWrapper>
					{entries.map(([id, { icon }]) => (
						<TabName
							key={"key-list-" + id}
							onClick={() => {
								setSelectedTab(id)
							}}
						>
							<MulticoloredName
								iconId={icon}
								{...nameProps}
								isReverse={id !== selectedTab}
								legibleTextColors={id === selectedTab}
								isCustom={id === selectedTab}
							>
								{t("list." + id)}
							</MulticoloredName>
						</TabName>
					))}
				</TabNamesWrapper>
				{entries.map(([name, { el }]) => (
					<TabPanel key={"el-list-" + name}>{el}</TabPanel>
				))}
			</Tabs>
		</StatsWrapper>
	)
}
