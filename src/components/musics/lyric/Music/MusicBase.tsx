import { useEffect, useState } from "react"
import { MusicBaseProps } from "./types"
import { MusicWrapper } from "./Music.styled"
import {
	playing,
	notPlaying,
	wrapperId,
	startMusic,
	startTimeout
} from "./constants"
import { MusicHeader, Lyric } from "./components"
import { formatMusic, calculateDelay, handleScroll } from "./functions"

export const MusicBase = ({
	path,
	name,
	lng,
	t,
	accentColor
}: MusicBaseProps) => {
	startMusic.title = name
	const [music, setMusic] = useState(startMusic)
	const [playingLyric, setPlayingLyric] = useState(notPlaying)
	const [timeoutID, setTimeoutID] = useState(startTimeout)

	useEffect(() => {
		fetch(`/musics/${path}.json`).then((response) =>
			response.json().then((body) => {
				const cleanMusic = formatMusic(body)
				setMusic(cleanMusic)
			})
		)
	}, [])

	const stopPlaying = () => {
		setPlayingLyric(notPlaying)
		clearTimeout(timeoutID)
	}

	const scrollToBottom = (currIdx: number) => {
		if (playingLyric === notPlaying) return
		const lyricWrapper = document.getElementById(wrapperId)
		if (lyricWrapper === null) return
		if (currIdx === music.lyric.length) {
			stopPlaying()
			return
		}
		const currVerseWrapper = document.getElementById(`verse-${currIdx}`)
		if (currVerseWrapper !== null) {
			currVerseWrapper.scrollIntoView()
		}
		const delay = calculateDelay(music, currIdx)
		const newId = setTimeout(() => scrollToBottom(currIdx + 1), delay)
		setTimeoutID(newId)
	}

	const handlePlay = () => {
		if (playingLyric === playing) stopPlaying()
		else {
			setPlayingLyric(playing)
			handleScroll(scrollToBottom)
		}
	}

	useEffect(() => {
		if (playingLyric === playing) handleScroll(scrollToBottom)
	}, [playingLyric])
	return (
		<MusicWrapper>
			<MusicHeader
				accentColor={accentColor}
				lng={lng}
				t={t}
				playingState={playingLyric}
				handlePlay={handlePlay}
				music={music}
			/>
			<Lyric
				accentColor={accentColor}
				playingState={playingLyric}
				t={t}
				lng={lng}
				lyric={music.lyric}
			/>
		</MusicWrapper>
	)
}
