import {
	UsedIconsWrapper,
	SectionTitle,
	GlobalData,
	Summary,
	ProgressBarsWrapper,
	Button,
	DetailedStats,
	LocalTab,
	LocalTabContent,
	LocalTabsList,
	Id,
	IdWrapper,
	IdsList,
	TabsWrapper,
	ButtonIcon,
	ButtonLabel,
	Subtitle
} from "./UsedIcons.styled"
import Progress from "../../common/Progress"
import { numberOfIcons } from "../../../constants/icons-map"
import usedIcons from "../../../constants/usedIcons"
import { useState } from "react"
import SVGIcon from "../../../icons/SVGIcon"
import { useTranslation } from "react-i18next"
import { useTheme } from "styled-components"
import { rainbowMonokai } from "../../../themes/Monokai"

const UsedIcons = () => {
	const { t } = useTranslation()
	usedIcons.delete("onlyhere")
	let otherPlaces = 0
	const onlyHere = new Set(Array.from(usedIcons.get("iconlist") || []))
	for (let [key, set] of usedIcons.entries()) {
		if (key !== "iconlist") {
			otherPlaces += set.size
			for (const id of set) {
				onlyHere.delete(id)
			}
		}
	}
	usedIcons.set("onlyhere", onlyHere)
	const theme = useTheme()
	const [showStats, setShowStats] = useState(false)
	const entries = Array.from(usedIcons.entries()).sort(([keyA], [keyB]) =>
		keyA.localeCompare(keyB)
	)
	return (
		<UsedIconsWrapper>
			<SectionTitle>{t("iconlist.stats.title")}</SectionTitle>
			<Summary>{t("iconlist.stats.disclaimer")}</Summary>
			<GlobalData>
				<ProgressBarsWrapper>
					<Progress
						color={{ done: theme.purple, total: theme.white }}
						title={t("iconlist.stats.progress.used")}
						type="bar"
						progress={{ done: otherPlaces, total: numberOfIcons }}
					/>
					<Progress
						color={{ done: theme.red, total: theme.white }}
						title={t("iconlist.stats.progress.unused")}
						type="bar"
						progress={{
							done: numberOfIcons - otherPlaces,
							total: numberOfIcons
						}}
					/>
				</ProgressBarsWrapper>
				<Button onClick={() => setShowStats(!showStats)}>
					<ButtonIcon>
						<SVGIcon size={48} id="chart" local="iconsstats" />
					</ButtonIcon>
					<ButtonIcon>
						<SVGIcon
							size={48}
							id={showStats ? "eyeclose" : "eye"}
							local="iconsstats"
						/>
					</ButtonIcon>
					<ButtonLabel>
						{t("iconlist.stats.more.label", {
							actionVerb: showStats
								? t("iconlist.stats.more.hide")
								: t("iconlist.stats.more.show")
						})}
					</ButtonLabel>
				</Button>
			</GlobalData>
			<DetailedStats $open={showStats}>
				<TabsWrapper>
					;
					<LocalTabsList>
						{entries.map(([key, set]) => {
							if (key === "iconlist") return
							return (
								<LocalTab key={"link-used-at-" + key}>
									{key} ({set.size})
								</LocalTab>
							)
						})}
					</LocalTabsList>
					{entries.map(([key, set]) => {
						if (key === "iconlist") return
						return (
							<LocalTabContent key={"tab-used-at-" + key}>
								<Subtitle>
									{t("iconlist.stats.sections.local", {
										localKey: `"${key}"`
									})}
								</Subtitle>
								<Progress
									color={{ done: theme.blue, total: theme.white }}
									title=""
									type="bar"
									progress={{
										done: set.size,
										total: numberOfIcons
									}}
								/>
								<IdsList>
									{Array.from(set)
										.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
										.map((iconId, idx) => (
											<IdWrapper
												key={key + "-icon-" + idx}
												style={{
													backgroundColor:
														rainbowMonokai[idx % rainbowMonokai.length]
												}}
											>
												<SVGIcon id={iconId} size={24} local="iconlist" />
												<Id>{iconId}</Id>
											</IdWrapper>
										))}
								</IdsList>
							</LocalTabContent>
						)
					})}
				</TabsWrapper>
			</DetailedStats>
		</UsedIconsWrapper>
	)
}

export default UsedIcons
