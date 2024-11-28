import { Button, ButtonIcon, ButtonLabel } from "./StatsButton.styled"
import { StatsButtonProps } from "../types"
import { SVGIcon } from "../../../../../common/client"

export const StatsButton = ({ lng, t, statsState }: StatsButtonProps) => {
	const [showStats, setShowStats] = statsState
	return (
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
	)
}
