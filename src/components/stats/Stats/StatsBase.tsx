import { StatsWrapper, TabName, TabNamesWrapper } from "./Stats.styled.ts"
import { GitStats } from "../Git/client.tsx"
import { LeetcodeStats } from "../Leetcode/client.tsx"
import { TabPanel, Tabs } from "react-tabs"
import { MainTitle } from "../Common.styled"
import { MulticoloredName } from "../../common/client.tsx"
import { ReactElement, useState } from "react"
import { StatsBaseProps } from "../types"
import { iconKey } from "../../../icons/index.ts"
import { PaletteInfoProps } from "../../../types/palette/"

interface TabProps {
	el: ReactElement<any, any>
	icon: iconKey
}
type tabsMap = Map<string, TabProps>

export const StatsBase = ({ lng, t }: StatsBaseProps) => {
	const selectedInfo: PaletteInfoProps = { group: "theme", name: "triple" }
	const notSelectedInfo: PaletteInfoProps = {
		group: "theme",
		name: "grayscalemonokai"
	}
	const nameProps = {
		fontSize: 24,
		lng,
		legible: true,
		local: "stats"
	}
	//$leetcodeTabStart
	const leetcodeTab: TabProps = {
		el: <LeetcodeStats lng={lng} />,
		icon: "leetcode"
	}
	//$leetcodeTabEnd
	//$gitTabStart
	const gitTab: TabProps = { el: <GitStats lng={lng} />, icon: "github" }
	//$gitTabEnd
	const tabs: tabsMap = new Map([
		["leetcode", leetcodeTab],
		["git", gitTab]
	])
	const entries = Array.from(tabs.entries())
	const [selectedTab, setSelectedTab] = useState(entries[0][0])
	return (
		<StatsWrapper>
			<MainTitle>{t("title")}</MainTitle>
			<Tabs>
				<TabNamesWrapper>
					{entries.map(([id, { icon }]) => {
						const selected = id === selectedTab
						return (
							<TabName
								key={"key-list-" + id}
								onClick={() => {
									setSelectedTab(id)
								}}
							>
								<MulticoloredName
									iconId={icon}
									{...nameProps}
									info={selected ? selectedInfo : notSelectedInfo}
									isReverse={!selected}
									legibleTextColors={selected}
								>
									{t("list." + id)}
								</MulticoloredName>
							</TabName>
						)
					})}
				</TabNamesWrapper>
				{entries.map(([name, { el }]) => (
					<TabPanel key={"el-list-" + name}>{el}</TabPanel>
				))}
			</Tabs>
		</StatsWrapper>
	)
}
