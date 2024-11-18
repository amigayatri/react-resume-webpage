import { ToggleIconProps, Music } from "./types"

const iconSettings: ToggleIconProps = {
	id: "pause",
	trueValAsStr: "not playing",
	shouldChange: true,
	options: { true: "play", false: "pause" }
}
const playing = "playing"
const notPlaying = "not playing"
const wrapperId = "lyric-wrapper"
const startTimeout = setTimeout(() => {})

const startMusic: Music = {
	title: "",
	artist: "",
	lyric: []
}

export {
	playing,
	notPlaying,
	wrapperId,
	iconSettings,
	startMusic,
	startTimeout
}
