import { iconKey } from "../../../../../icons"
import { Music, MusicVerse } from "../types"
import { getTimestampAsMs } from "./time"

interface RawMusicVerse {
	lines: string[]
	icons: string[]
	startTime: string
}

interface RawMusic {
	title: string
	artist: string
	chorus?: RawMusicVerse
	lyric: RawMusicVerse[]
}

type iconsAsKey = (icons: string[]) => iconKey[]
const iconsAsKey: iconsAsKey = (icons) => icons.map((id) => id as iconKey)

type formatVerse = (
	verse: RawMusicVerse,
	chorus: RawMusicVerse | undefined,
	idx: number
) => MusicVerse | undefined
const formatVerse: formatVerse = ({ lines, icons, startTime }, chorus, idx) => {
	const verse: Partial<MusicVerse> = {
		key: `verse-${idx}`
	}
	if (lines.length === 1 && lines[0] === "$chorus") {
		if (chorus === undefined) return
		verse.lines = chorus.lines
		verse.icons = iconsAsKey(chorus.icons)
		verse.isChorus = true
	} else {
		verse.lines = lines
		verse.icons = iconsAsKey(icons)
		verse.isChorus = false
	}
	verse.delay = getTimestampAsMs(startTime)
	return verse as MusicVerse
}

type formatMusic = (music: RawMusic) => Music
export const formatMusic: formatMusic = (music) => {
	const { title, artist, chorus } = music
	const formattedLyric = music.lyric.map((rawVerse, idx) =>
		formatVerse(rawVerse, chorus, idx)
	)
	const lyric = formattedLyric.filter((verse) => verse !== undefined)
	return {
		title,
		artist,
		lyric
	}
}
