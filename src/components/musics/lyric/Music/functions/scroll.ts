import { wrapperId } from "../constants"

export const handleScroll = (scrollToBottom: (currIdx: number) => void) => {
	const lyricWrapper = document.getElementById(wrapperId)
	if (lyricWrapper === null) return
	lyricWrapper.scrollTop = 0
	scrollToBottom(-1)
}
