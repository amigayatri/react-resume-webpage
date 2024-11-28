import { UsedIconsWrapper, GlobalData } from "./UsedIcons.styled"
import { SectionTitle } from "../Common.styled"
import { useState } from "react"
import { UsedIconsBaseProps } from "../types"
import { TotalProgress, StatsButton, DetailedStats } from "./components"

export const UsedIconsBase = ({ t, lng, currIcons }: UsedIconsBaseProps) => {
	const [showStats, setShowStats] = useState(false)
	const defaultProps = { t, lng }
	return (
		<UsedIconsWrapper>
			<SectionTitle>{t("stats.title")}</SectionTitle>
			<GlobalData>
				<TotalProgress currIcons={currIcons} {...defaultProps} />
				<StatsButton
					{...defaultProps}
					statsState={[showStats, setShowStats]}
				/>
			</GlobalData>
			<DetailedStats
				{...defaultProps}
				currIcons={currIcons}
				isOpen={showStats}
			/>
		</UsedIconsWrapper>
	)
}
