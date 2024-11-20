import { MusicHeaderProps } from "../../types"
import {
	Title,
	Artist,
	HeaderWrapper,
	ControlWrapper
} from "./MusicHeader.styled"
import { Toggle } from "../../../../../common/client"
import { iconSettings, 
	//playing, 
	//notPlaying 
} from "../../constants"
// import { useEffect, useState } from "react"

export const MusicHeader = ({
	lng,
	t,
	music,
	playingState,
	accentColor,
	isDark,
	handlePlay
}: MusicHeaderProps) => {
	// const [hasAudio, setHasAudio] = useState(false)
	// const [playingAudio, setPlayingAudio] = useState(notPlaying)
	const { title, artist } = music
	// useEffect(() => {
	// 	fetch(`/musics/${artist}/${title}.mp3`).then((response) => {
	// 		if (response.status === 200) setHasAudio(true)
	// 	})
	// }, [music.lyric.length])
	// const handleAudioPlay = () => {
	// 	const audioEl = document.getElementById("audio")
	// 	if (audioEl === null) return
	// 	if (playingAudio === playing) {
	// 		setPlayingAudio(notPlaying)
	// 		document.getElementById("audio")
	// 	} else {
	// 		setPlayingAudio(playing)
	// 	}
	// }
	return (
		<HeaderWrapper>
			<Title $accentColor={isDark ? accentColor.dark : accentColor.light}>
				{title}
			</Title>
			<Artist>{artist}</Artist>
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
				{/* {hasAudio && (
					<Toggle
						lng={lng}
						icon={iconSettings}
						state={playingAudio}
						stateChangeFN={handleAudioPlay}
						label={t("play.music")}
						showLabel
						customColor={isDark ? accentColor.dark : accentColor.light}
					/>
				)}
				{artist.length > 0 && hasAudio && (
					<Audio muted controls id="audio">
						<source src={`/musics/${artist}/${title}.mp3`} />
					</Audio>
				)} */}
			</ControlWrapper>
		</HeaderWrapper>
	)
}
