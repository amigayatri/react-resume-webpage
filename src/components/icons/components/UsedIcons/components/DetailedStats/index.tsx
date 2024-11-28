import { DetailedStatsWrapper } from "./DetailedStats.styled"
import { DetailedStatsProps } from "../types"
import { getCurrStats } from "../functions"
import { LocalStats } from ".."

export const DetailedStats = ({
	lng,
	t,
	currIcons,
	isOpen
}: DetailedStatsProps) => {
	const { usageLocalMap, total } = getCurrStats(currIcons)
	return (
		<DetailedStatsWrapper $open={isOpen}>
			<LocalStats
				total={total}
				localMap={usageLocalMap}
				t={t}
				lng={lng}
			/>
		</DetailedStatsWrapper>
	)
}
