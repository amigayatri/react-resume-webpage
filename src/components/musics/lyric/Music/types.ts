import {
	ToggleIconProps,
	iconKey,
	ElementProps,
	BaseElementProps
} from "../../../../types/common"
import { musicName, musicPath } from "../../../../types/musics"
import { MusicBaseElement } from "../types"

export interface MusicProps extends ElementProps {
	name: musicName
	path: musicPath
	baseAccent?: string
}

export interface MusicBaseProps extends BaseElementProps {}
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
