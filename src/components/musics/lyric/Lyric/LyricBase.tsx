import { useEffect, useState } from "react"
import { LyricBaseProps } from "../types"
import {
	MusicWrapper,
	Title,
	Artist,
	Verse,
	Line,
	Chorus,
	HeaderWrapper,
	LyricWrapper,
	Icon,
	IconList
} from "./Lyric.styled"
import { Loading } from "../../../common"
import { toggleIconKey, iconKey } from "../../../../types/common"
import { SVGIcon, Toggle } from "../../../common/client"

const playId: toggleIconKey = "play"
const pauseId: toggleIconKey = "pause"
interface Verse {
	lines: string[]
	icons: iconKey[]
}

interface MusicProps {
	title: string
	artist: string
	chorus?: Verse
	lyric: Verse[]
}

type playingStatus = "playing" | "not playing"
const playing: playingStatus = "playing"
const notPlaying: playingStatus = "not playing"

const wrapperId = "lyric-wrapper"

export const LyricBase = ({ path, name, lng, t }: LyricBaseProps) => {
	const startMusic: MusicProps = {
		title: name,
		artist: "",
		lyric: []
	}
	const iconSettings = {
		id: pauseId,
		trueValAsStr: "playing",
		shouldChange: true,
		options: { true: pauseId, false: playId }
	}
	const [music, setMusic] = useState(startMusic)
	const [playingLyric, setPlayingLyric] = useState("not playing")
	const [verseNumbers, setVerseNumbers] = useState(0)
	const [lastLineID, setLastLineID] = useState("")
	useEffect(() => {
		fetch(`/musics/${path}.json`).then((response) =>
			response.json().then((body) => {
				setMusic(body)
				setVerseNumbers(body.lyric.length)
			})
		)
	}, [])

	const printLines = (
		{ icons, lines }: Verse,
		idx: number,
		isChorus?: boolean
	) => {
		return (
			<>
				<IconList>
					{icons.map((iconId, iconIdx) => (
						<Icon key={`verse-${idx}-icon-${iconIdx}`}>
							<SVGIcon
								color="currentColor"
								lng={lng}
								id={iconId}
								size={isChorus === true ? 80 : 64}
								local="lyric"
							/>
						</Icon>
					))}
				</IconList>
				{lines.map((line, lineIdx) => {
					const key = `verse-${idx}-line-${lineIdx}`
					const isLast =
						idx === verseNumbers - 1 && lineIdx === lines.length - 1
					if (isLast && lastLineID === "") setLastLineID(key)
					return (
						<Line id={key} key={key}>
							{line}
						</Line>
					)
				})}
			</>
		)
	}

	const printVerse = (verse: Verse, idx: number) => {
		if (verse.lines.length === 1 && verse.lines[0] === "$chorus")
			return printChorus(idx)
		const key = `verse-${idx}`
		return (
			<Verse id={key} key={key}>
				{printLines(verse, idx)}
			</Verse>
		)
	}

	const printChorus = (idx: number) => {
		if (music.chorus === undefined) return
		const key = `verse-${idx}`
		return (
			<Chorus id={key} key={key}>
				{printLines(music.chorus, idx)}
			</Chorus>
		)
	}

	const scrollToBottom = (currVerse: number, verseAverageOffset: number) => {
		const lyricWrapper = document.getElementById(wrapperId)
		if (lyricWrapper === null) return
		if (currVerse === verseNumbers) return
		lyricWrapper.scrollTop += verseAverageOffset
		setTimeout(() => scrollToBottom(currVerse + 1, verseAverageOffset), 2048)
	}

	const handleScroll = () => {
		if (playingLyric !== playing) return
		const lyricWrapper = document.getElementById(wrapperId)
		const lastLine = document.getElementById(lastLineID)
		if (lyricWrapper === null || lastLine === null) return
		const lastLinePos = lastLine.offsetTop
		console.log(lyricWrapper.scrollTop, lastLine?.offsetTop)
		const verseAverageOffset = lastLinePos / verseNumbers
		console.log(verseAverageOffset)
		lyricWrapper.scrollTop = 0
		scrollToBottom(0, verseAverageOffset)
		setPlayingLyric(notPlaying)
	}
	handleScroll()
	return (
		<MusicWrapper>
			<HeaderWrapper>
				<Title>{music.title}</Title>
				<Artist>{music.artist}</Artist>
				<Toggle
					lng={lng}
					icon={iconSettings}
					state={playingLyric}
					stateChangeFN={() => {
						playingLyric === playing
							? setPlayingLyric(notPlaying)
							: setPlayingLyric(playing)
					}}
					ariaLabel={t("theme.change")}
				/>
			</HeaderWrapper>
			<LyricWrapper id={wrapperId}>
				{verseNumbers === 0 ? (
					<Loading notFullPage type="pacman" />
				) : (
					music.lyric.map(printVerse)
				)}
			</LyricWrapper>
		</MusicWrapper>
	)
}
