import { ProgressBarsWrapper } from "./TotalProgress.styled"
import { TotalProgressProps } from "../types"
import { Progress } from "../../../../../common/client"
import { useTheme } from "styled-components"
import { getCurrStats } from "../functions"

export const TotalProgress = ({ lng, t, currIcons }: TotalProgressProps) => {
	const theme = useTheme()
	const { used, total } = getCurrStats(currIcons)
	return (
		<ProgressBarsWrapper>
			<Progress
				lng={lng}
				color={{ done: theme.purple, total: theme.white }}
				title={t("stats.progress.used")}
				type="bar"
				progress={{ done: used, total: total }}
			/>
			<Progress
				lng={lng}
				color={{ done: theme.red, total: theme.white }}
				title={t("stats.progress.unused")}
				type="bar"
				progress={{
					done: total - used,
					total: total
				}}
			/>
		</ProgressBarsWrapper>
	)
}
