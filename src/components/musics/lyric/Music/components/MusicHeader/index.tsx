import { MusicHeaderProps } from "../../types"
import {
	Title,
	Artist,
	HeaderWrapper,
	ControlWrapper
} from "./MusicHeader.styled"
import { Toggle } from "../../../../../common/client"
import { iconSettings } from "../../constants"
import { canUseColor } from "../../../../../../lib/colors"
import { useTheme } from "styled-components"
import { useEffect, useState } from "react"

export const MusicHeader = ({
	lng,
	t,
	music,
	playingState,
	accentColor,
	handlePlay
}: MusicHeaderProps) => {
	const theme = useTheme()
	const [canUseAccent, setCanUseAccent] = useState(
		accentColor !== "" ? canUseColor(accentColor, theme.background) : true
	)
	useEffect(() => {
		if (accentColor !== "")
			setCanUseAccent(canUseColor(accentColor, theme.background))
	}, [theme.primary])
	return (
		<HeaderWrapper>
			<Title
				$addFilter={!canUseAccent}
				$accentColor={accentColor === "" ? undefined : accentColor}
			>
				{music.title}
			</Title>
			<Artist>{music.artist}</Artist>
			<ControlWrapper
				$addFilter={!canUseAccent}
				$accentColor={accentColor === "" ? undefined : accentColor}
			>
				<Toggle
					lng={lng}
					icon={iconSettings}
					state={playingState}
					stateChangeFN={handlePlay}
					label={t("play.lyric")}
					showLabel
					alwaysDark
					customColor={accentColor === "" ? undefined : accentColor}
				/>
			</ControlWrapper>
		</HeaderWrapper>
	)
}
