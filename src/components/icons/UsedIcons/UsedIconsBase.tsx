import {
	UsedIconsWrapper,
	SectionTitle,
	GlobalData,
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
import { SVGIcon, Progress } from "../../common/client"
import { useTheme } from "styled-components"
import { useEffect, useState } from "react"
import { getAllUsed, getAllIconsIds, iconKey } from "../../../icons/"
import { rainbowMonokai } from "../../../lib/palettes/maps/rainbow"
import { UsedIconsBaseProps } from "../types"

const emptyIcons: iconKey[] = []

export const UsedIconsBase = ({ t, lng }: UsedIconsBaseProps) => {
	const [icons, setIcons] = useState(emptyIcons)
	useEffect(() => {
		const allIcons = getAllIconsIds()
		setIcons(allIcons)
	}, [])
	let otherPlaces = 0
	const allUsedIcons = getAllUsed()
	const onlyHere = new Set()
	const numberOfIcons = icons.length
	for (let [key, set] of allUsedIcons) {
		if (key !== "iconlist") {
			otherPlaces += set.size
			for (const id of set) {
				onlyHere.delete(id)
			}
		}
	}
	const theme = useTheme()
	const [showStats, setShowStats] = useState(false)
	const entries = allUsedIcons.sort(([keyA], [keyB]) =>
		keyA.localeCompare(keyB)
	)
	return (
		<UsedIconsWrapper>
			<SectionTitle>{t("stats.title")}</SectionTitle>
			<GlobalData>
				<ProgressBarsWrapper>
					<Progress
						lng={lng}
						color={{ done: theme.purple, total: theme.white }}
						title={t("stats.progress.used")}
						type="bar"
						progress={{ done: otherPlaces, total: numberOfIcons }}
					/>
					<Progress
						lng={lng}
						color={{ done: theme.red, total: theme.white }}
						title={t("stats.progress.unused")}
						type="bar"
						progress={{
							done: numberOfIcons - otherPlaces,
							total: numberOfIcons
						}}
					/>
				</ProgressBarsWrapper>

				<Button onClick={() => setShowStats(!showStats)}>
					<ButtonIcon>
						<SVGIcon lng={lng} size={48} id="chart" local="iconsstats" />
					</ButtonIcon>
					<ButtonIcon>
						<SVGIcon
							lng={lng}
							size={48}
							id={showStats ? "eyeclose" : "eyeopen"}
							local="iconsstats"
						/>
					</ButtonIcon>
					<ButtonLabel>
						{t("stats.more.label", {
							actionVerb: showStats
								? t("stats.more.hide")
								: t("stats.more.show")
						})}
					</ButtonLabel>
				</Button>
			</GlobalData>
			<DetailedStats $open={showStats}>
				<TabsWrapper>
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
									{t("stats.sections.local", {
										localKey: key
									})}
								</Subtitle>
								<Progress
									lng={lng}
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
														rainbowMonokai.colors[
															idx % rainbowMonokai.colors.length
														]
												}}
											>
												<SVGIcon
													lng={lng}
													id={iconId}
													size={24}
													local="iconlist"
												/>
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
