import { Music } from "../types"

type getAsMS = (timeStr: string, isMinute?: boolean) => number
const getAsMS: getAsMS = (timeStr, isMinute) => {
	const time = Number.parseInt(timeStr)
	if (isMinute === true) {
		return time * 60 * 1000
	}
	return time * 1000
}

type getTimestampAsMs = (timestamp: string) => number
export const getTimestampAsMs = (timestamp: string) => {
	const [minStr, secStr] = timestamp.split(":")
	return getAsMS(minStr, true), getAsMS(secStr)
}

type calculateDelay = (music: Music, idx: number) => number
export const calculateDelay: calculateDelay = ({ lyric }, idx) => {
	if (idx === -1) {
		return lyric[0].delay
	} else if (idx + 1 === lyric.length) {
		return 2048
	} else {
		return lyric[idx + 1].delay - lyric[idx].delay
	}
}
