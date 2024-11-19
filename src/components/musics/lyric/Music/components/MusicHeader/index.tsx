import { MusicHeaderProps } from "../../types"
import {
	Title,
	Artist,
	HeaderWrapper,
	ControlWrapper
} from "./MusicHeader.styled"
import { Toggle } from "../../../../../common/client"
import { iconSettings } from "../../constants"

export const MusicHeader = ({
	lng,
	t,
	music,
	playingState,
	accentColor,
	isDark,
	handlePlay
}: MusicHeaderProps) => {
	return (
		<HeaderWrapper>
			<Title $accentColor={isDark ? accentColor.dark : accentColor.light}>
				{music.title}
			</Title>
			<Artist>{music.artist}</Artist>
			<ControlWrapper
				$accentColor={isDark ? accentColor.dark : accentColor.light}
			>
				<Toggle
					lng={lng}
					icon={iconSettings}
					state={playingState}
					stateChangeFN={handlePlay}
					label={t("play.lyric")}
					showLabel
					customColor={isDark ? accentColor.dark : accentColor.light}
				/>
			</ControlWrapper>
		</HeaderWrapper>
	)
}
