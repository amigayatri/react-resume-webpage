import { ToggleIconProps, iconKey } from "../../../../types/common"
import { musicName, musicPath } from "../../../../types/musics"
import { MusicElementProps, MusicBaseElement } from "../types"

export interface MusicProps extends MusicElementProps {
	name: musicName
	path: musicPath
}
export interface MusicBaseProps extends MusicBaseElement {}
export interface MusicBaseProps extends MusicProps {}

export interface MusicVerse {
	lines: string[]
	icons: iconKey[]
	delay: number
	isChorus: boolean
	key: string
}

export interface Music {
	title: string
	artist: string
	lyric: MusicVerse[]
}

export interface MusicHeaderProps extends MusicBaseElement {
	music: Music
	playingState: string
	handlePlay: () => void
}

export interface VerseIconsProps extends MusicBaseElement {
	icons: iconKey[]
	idx: number
	isChorus: boolean
}

export interface VerseProps extends MusicBaseElement {
	idx: number
	verse: MusicVerse
}

export interface LyricProps extends MusicBaseElement {
	lyric: MusicVerse[]
	playingState: string
}

export type { ToggleIconProps }
